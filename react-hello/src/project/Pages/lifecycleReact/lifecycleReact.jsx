import React from "react";

class lifecycleReact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 1,
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate")
    }


    componentDidMount(){
        console.log("componentDidMount")
        setTimeout( () => this.setState({
            count:2
        }),5000)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render(){
        return(
            <>
            <button className="buttonChange"> State: {this.state.count}</button>
            </>
        )
    }
}

export default lifecycleReact