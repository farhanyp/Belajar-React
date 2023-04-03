import React, {createContext} from "react";

const RootContext = createContext()

const GlobalProvider = (Children) => {
    return(
        class ParentComp extends React.Component{
            state = {
                totalOrder: 5
            }

            dispatch = (action) => {
                if(action.type === "PLUS_ORDER"){
                    this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if(action.type === "MINUS_ORDER"){
                    if(this.state.totalOrder > 0){
                        this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }
                }
            }

            render(){
                return(
                    <>
                    <RootContext.Provider value={{ 
                        state: this.state,
                        dispatch: this.dispatch
                     }}>
                        <Children {...this.props}/>
                    </RootContext.Provider>
                    </>
                )
            }
        }
    )
}

export default GlobalProvider

const Consumer = RootContext.Consumer
export const GlobalConsumer = (Children) => {
    return(
        class ParentConsumer extends React.Component{
            render(){
                return(
                    <>
                    <Consumer>
                        {
                            value =>{
                                return(<Children {...this.props}{...value}/>)
                            }
                        }
                    </Consumer>
                    </>
                )
            }
        }
    )
}