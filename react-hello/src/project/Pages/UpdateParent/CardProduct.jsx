import React from "react";
import Counter from "./Counter";

class CardProduct extends React.Component{



    render(){
        return(
            <>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <p className="prdouct-title">Daging Ayam Berbumbu</p>
                <p className="prdouct-price">Rp. 410.000</p>
                
                <Counter/>

            </div>
            </>
        )
    }
}

export default CardProduct