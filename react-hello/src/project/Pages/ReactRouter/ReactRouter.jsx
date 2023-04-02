import React, { createContext } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import Product from "../UpdateParent/Product";
import TryLifecycleReact from "../lifecycleReact/tryLifecycleReact"
import DetailPost from "../BlogPost/DetailPost";
import Youtube from "../props/YoutubeCompPage"
import '../ReactRouter/Home.css'

export const RootContext = createContext()

class ReactRouter extends React.Component{
    state ={
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
            <RootContext.Provider value={
                {
                    state: this.state,
                    dispatch: this.dispatch
                }
            }>
                <BrowserRouter>
                    <div className="navigation">
                        <NavLink
                        to="/"
                        className={({isActive, isPending}) =>
                            isPending ? "pending": isActive ? "active" : ""
                        }
                        >BlogPost</NavLink>

                        <NavLink
                        to="/product"
                        className={({isActive, isPending}) =>
                            isPending ? "pending": isActive ? "active" : ""
                        }
                        >Product</NavLink>

                        <NavLink
                        to="/lifecycle"
                        className={({isActive, isPending}) =>
                            isPending ? "pending": isActive ? "active" : ""
                        }
                        >Lifecylce</NavLink>

                        <NavLink
                        to="/youtube"
                        className={({isActive, isPending}) =>
                            isPending ? "pending": isActive ? "active" : ""
                        }
                        >Youtube</NavLink>

                        {/* Tanpa menggunakan isActive dan isPending */}
                        {/* <Link to="/">BlogPost</Link>
                        <Link to="/lifecycle">Lifecylce</Link> */}
                    </div>

                    <Routes>
                        <Route path="/" element={<BlogPost/>}/>
                        <Route path="/product" element={<Product/>}/>
                        <Route path="/detail-post/:id" element={<DetailPost/>}/>
                        <Route path="/lifecycle" element={<TryLifecycleReact/>}/>
                        <Route path="/youtube" element={<Youtube/>}/>
                    </Routes>
                </BrowserRouter>
            </RootContext.Provider>
            </>
        )
    }

}

export default ReactRouter