import React from "react";
import { RootContext } from "../ReactRouter/ReactRouter";
// import { connect } from "react-redux";
// import TypeAction from "../../Redux/globalTypeAction";

class Counter extends React.Component{
    
    // state= {
    //     order:3
    // }

    // handlePropsState = (value) =>{
    //     this.props.changeState(value)
    // }

    // handlePlus = () =>{
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {this.handlePropsState(this.state.order)})
    // }

    // handleMinus = () =>{
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {this.props.changeState(this.state.order)})
    //     }
    // }

    render(){
        return(
            <>
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <div className="counter">
                            <button className="minus" onClick={()=>value.dispatch({type:"MINUS_ORDER"})}>-</button>
                            <input type="text" value={value.state.totalOrder} />
                            <button className="plus" onClick={()=> value.dispatch({type:"PLUS_ORDER"})}>+</button>
                    </div>
                        )
                    }
                }
            </RootContext.Consumer>
            </>
        )
    }
}

// const mapStateToProps = (state)=>{
//     return {
//         order: state.orderTotal
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         handlePlus: () => dispatch({type: TypeAction.PLUS_ORDER}),
//         handleMinus: () => dispatch({type: TypeAction.MINUS_ORDER})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter