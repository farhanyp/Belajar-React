import React from "react";
import LifecycleReact from "./lifecycleReact";

class tryLifecycleReact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            delete: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                delete: false
            })
        }, 15000)
    }

    render(){
        return(
            <>
                {this.state.delete ? <LifecycleReact/> : null}
            </>
        )
    }
}

export default tryLifecycleReact
