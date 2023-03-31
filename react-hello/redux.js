const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 21
}

// Reducer = fungsi untuk mengubah dan memasukan kedalam store
const rootReducer = (state = initialState ,action)=>{
    switch(action.type){
        case 'ADD_AGE':
            return{
                ...state,
                age: state.age + 1
            }
        case 'ADD_VALUE':
            return{
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state
    }
    }

// Store = fungsi untuk sebagai wadah dari state
const store = createStore(rootReducer)
console.log(store.getState())

// Subscription = mengecek store apakah ada perubahan jika ada maka store diambil dan ditampilkan
store.subscribe(()=>{
    console.log("State Change:", store.getState())
})

// Dispatch  = fungsi untuk mengubah sesuatu didalam reducer
store.dispatch({type: "ADD_AGE"})
store.dispatch({type: "ADD_VALUE", newValue: 20})