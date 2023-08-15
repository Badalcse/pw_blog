import React, { useState } from "react";
import { Header } from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import "../styles/homepage.css"

export const HomePage = ()=>{
    const[blogData,setBlogData] = useState([
        {title:"Blog 1", img:"data:image/jpeg;base64,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",desc:"desc1"},
        {title:"Blog 2", img:"https://th.bing.com/th/id/OIP.3qL25AFTZgsDFDA33HjJ8QHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7",desc:"desc1"},
        {title:"Blog 3", img:"https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600", desc:"desc3"}
        
    ])
    


    return(
       <div id="HomePage">
       
       <div id="blogParent">
       
      {
        blogData.map((e)=>{
            return <BlogCard img={e.img} desc={e.desc} title={e.title}/>
        })
      }
       
      

       </div>
       
                    

       
       </div>
       
    )
}