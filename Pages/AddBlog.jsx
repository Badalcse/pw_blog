import React, { useState } from "react";
import { Header } from "../components/Header";
import "../styles/from.css"

export const AddBlog = ()=>{
    const[blogData, setBlogData]=useState({
        title:"",
        img:"",
        desc:"",
        content:""
    })
    const submitData=()=>{
        console.log(blogData)
    }
    
    return(
        <div id="fromParent">
        <div id="from">
            <h1>Add your Blog, now!</h1>
            <input type="text" placeholder="Enter Image Url" value={blogData.img} onChange={(e)=>{setBlogData({...blogData,img:e.target.value})}} />
            <input type="text" placeholder="Enter Title of your blog" value={blogData.title} onChange={(e)=>{setBlogData({...blogData,title:e.target.value})}} />
            <input type="text" placeholder="Type Short Description of Your blog" value={blogData.desc} onChange={(e)=>{setBlogData({...blogData,desc:e.target.value})}} />
            <textarea name="" placeholder="Type your blog" id="" cols="30" rows="10" value={blogData.content} onChange={(e)=>{setBlogData({...blogData,content:e.target.value})}}></textarea>
            <button onClick={submitData}>Add blog</button>
        </div>
        </div>
    )
}