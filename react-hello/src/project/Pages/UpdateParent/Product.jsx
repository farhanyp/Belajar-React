import React from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {BsShop} from 'react-icons/bs';
import CardProduct from "./CardProduct";
import { RootContext } from "../ReactRouter/ReactRouter";
import "./Product.css"
// import { connect } from "react-redux";

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
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <div className="header">
                                <div className="logo">
                                <BsShop className="img"/>
                                </div>
                                <div className="troley">
                                <FaShoppingCart />
                                <div className="count">{value.state.totalOrder}</div>
                                </div>
                            </div>
                            
                        )
                    }
                }
            </RootContext.Consumer>
            <CardProduct/>
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         order: state.orderTotal
//     }
// }

// export default connect(mapStateToProps)(Product)
export default Product