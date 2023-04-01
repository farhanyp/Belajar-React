import React from "react";
import { connect } from "react-redux";
import TypeAction from "../../Redux/globalTypeAction";

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
            <div className="counter">
                    <button className="minus" onClick={this.props.handleMinus}>-</button>
                    <input type="text" value={this.props.order} />
                    <button className="plus" onClick={this.props.handlePlus}>+</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        order: state.orderTotal
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handlePlus: () => dispatch({type: TypeAction.PLUS_ORDER}),
        handleMinus: () => dispatch({type: TypeAction.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)