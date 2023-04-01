import React from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {BsShop} from 'react-icons/bs';
import CardProduct from "./CardProduct";
import "./Product.css"
import { connect } from "react-redux";

class Product extends React.Component{
    // state= {
    //     order:3
    // }

    // handleChangeState = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <>
            <div className="header">
                <div className="logo">
                <BsShop className="img"/>
                </div>
                <div className="troley">
                <FaShoppingCart />
                <div className="count">{this.props.order}</div>
                </div>
            </div>

            <CardProduct/>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.orderTotal
    }
}

export default connect(mapStateToProps)(Product)