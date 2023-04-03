import React from "react";
import YoutubeComp from "./YoutubeComp";
import { GlobalConsumer } from "../../Context/GlobalContext";
// import { connect } from "react-redux";

class YoutubeCompPage extends React.Component{
    render(){
        return(
            <div>
                {/* Mengirim props ke youtube comp supaya data yang digunakan lebih dinamis */}
                <YoutubeComp time="10.8" title="ini title 1" desc="ini desc 1"/>
                <YoutubeComp time="6.80" title="ini title 2" desc="ini desc 2"/>
                <YoutubeComp time="7.98" title="ini title 3" desc="ini desc 3"/>
                <YoutubeComp/>
                <hr />
                <h1>Total Order: {this.props.state.totalOrder}</h1>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         order: state.orderTotal
//     }
// }

// export default connect(mapStateToProps)(YoutubeCompPage)
export default GlobalConsumer (YoutubeCompPage)