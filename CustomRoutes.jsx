import React from "react";
import {Route, Routes} from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AddBlog } from "../Pages/AddBlog";

export const CustomRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/addblog" element={<AddBlog/>}/>
        </Routes>
    )
}