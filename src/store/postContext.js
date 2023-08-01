import {createContext, useState} from "react";

export const PostContext=createContext(null)

const Post({children}){
    let [PostDetails,setPostDetails]=useState()
    return(
        
     <PostContext.Provider value={{PostDetails,setPostDetails}}>
        {children}
     </PostContext.Provider>
    )
}

export default Post

