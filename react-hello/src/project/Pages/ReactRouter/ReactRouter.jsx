import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import Product from "../UpdateParent/Product";
import TryLifecycleReact from "../lifecycleReact/tryLifecycleReact"
import DetailPost from "../BlogPost/DetailPost";
import Youtube from "../props/YoutubeCompPage"
import GlobalProvider from "../../Context/GlobalContext";
import '../ReactRouter/Home.css'
import Hooks from "../Hooks/Hooks";


class ReactRouter extends React.Component{
    render(){
        return(
            <>
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

<NavLink
                        to="/hooks"
                        className={({isActive, isPending}) =>
                            isPending ? "pending": isActive ? "active" : ""
                        }
                        >Hooks</NavLink>

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
                        <Route path="/hooks" element={<Hooks/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }

}

export default GlobalProvider(ReactRouter)