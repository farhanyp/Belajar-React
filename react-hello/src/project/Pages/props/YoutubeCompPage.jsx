import React from "react";
import YoutubeComp from "./YoutubeComp";
import { RootContext } from "../ReactRouter/ReactRouter";
// import { connect } from "react-redux";

class YoutubeCompPage extends React.Component{
    render(){
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return(
                        <div>
                            {/* Mengirim props ke youtube comp supaya data yang digunakan lebih dinamis */}
                            <YoutubeComp time="10.8" title="ini title 1" desc="ini desc 1"/>
                            <YoutubeComp time="6.80" title="ini title 2" desc="ini desc 2"/>
                            <YoutubeComp time="7.98" title="ini title 3" desc="ini desc 3"/>
                            <YoutubeComp/>
                            <hr />
                            <h1>Total Order: {value.state.totalOrder}</h1>
                        </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         order: state.orderTotal
//     }
// }

// export default connect(mapStateToProps)(YoutubeCompPage)
export default YoutubeCompPage