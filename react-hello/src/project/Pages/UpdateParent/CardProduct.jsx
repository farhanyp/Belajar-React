import React from "react";

class CardProduct extends React.Component{

    state= {
        order:3
    }

    handlePropsState = (value) =>{
        this.props.changeState(value)
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1
        }, () => {this.handlePropsState(this.state.order)})
    }

    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {this.props.changeState(this.state.order)})
        }
    }


    render(){
        return(
            <>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <p className="prdouct-title">Daging Ayam Berbumbu</p>
                <p className="prdouct-price">Rp. 410.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
            </>
        )
    }
}

export default CardProduct