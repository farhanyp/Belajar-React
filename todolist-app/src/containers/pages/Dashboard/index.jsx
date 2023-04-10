import React from "react";
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ref, push, onValue, set, remove } from "firebase/database";
import { updateNote,changeUpdate } from "../../../config/redux/reducer";
import { getDatabase } from "firebase/database";
import './Dashboard.scss'

const Dashboard = () => {
    const notes = useSelector((state) => state.reducer.notes)
    const isUpdate = useSelector((state) => state.reducer.isUpdate)
    const userID = localStorage.getItem('userId')
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [dataUpdate, setdataUpdate] = useState("")

    useEffect(() => {
        return () => {
            getDataFromFirebase(userID)
        };
    }, []);
    

    const postDataToFirebase = (userID, title, content) => {
        return new Promise ((resolve,reject) => {
            const db = getDatabase();
            push(ref(db, 'post/' + userID), {
                title: title,
                content: content, 
            }).then(resolve(true))
            .catch(err => reject(err))
        })
    }


    const getDataFromFirebase = (userID) =>{
        const db = getDatabase();
        const date = new Date().getSeconds()
        const starCountRef = ref(db, 'post/' + userID);
        onValue(starCountRef, (snapshot) => {
            const data = [];
            (snapshot.val() === null) ? 
            dispatch(updateNote([])) : Object.keys(snapshot.val()).map((key) => {
                data.push({
                    id:key,
                    time:date,
                    data:snapshot.val()[key]
                })
             })
             dispatch(updateNote(data))
         })
    }


    const updateDataFromFirebase = (data) =>{
        const db = getDatabase();
        set(ref(db, 'post/' + userID + '/' + data.id), {
            id: data.id,
            title: title,
            content: content,
            time: data.time
        })
        .then(() => {
            alert("Berhasil mengubah")
            dispatch(changeUpdate(false))
        })
        .catch((error) => console.log(error))
    }


    const deleteDataFormFirebase = (data) =>{
        alert("Yakin ingin menghapus ?")
        const db = getDatabase();
        remove(ref(db, 'post/' + userID + '/' + data.id))
        .then(() => {
            alert("Berhasil menghapus")
        })
        .catch((error) => console.log(error))
    }

    
    const handleUpdate = (data) =>{
        setTitle(data.data.title)
        setContent(data.data.content)
        setdataUpdate(data)
        dispatch(changeUpdate(true))
    }


    const clearInput = () => {
        setTitle("")
        setContent("")
    }


    const handleSubmit = () => {
        if(isUpdate){
            updateDataFromFirebase(dataUpdate)

        }else{
            postDataToFirebase(userID, title, content)
        }
    }



    return(
        <div className="container">
            <div className="input-form">
                <input placeholder="title" type="text" className="input-title" id="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <textarea placeholder="content" className="input-content" id="content" onChange={(e)=>setContent(e.target.value)} value={content}>

                </textarea>
                <button className="save-btn" onClick={()=> handleSubmit()} >Send</button>
                <button onClick={() => clearInput()}>Clear</button>
            </div>
            <hr />
            { 
                (notes.length > 0) ? 
                notes.map((note) => {
                    return(
                        <div className="card-content" key={note.id}>
                            <p className="title">{note.data.title}</p>
                            <p className="data">{note.time}</p>
                            <p className="content">{note.data.content}</p>
                            <button onClick={() => handleUpdate(note)}>Update</button>
                            <button onClick={() => deleteDataFormFirebase(note)}>Delete</button>
                        </div> 
                    )
                }) : null
            }
            
        </div>
    )
}

export default Dashboard