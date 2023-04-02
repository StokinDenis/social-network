import s from "./MyPost.module.css"
import React from "react";

function Post(props){
    return(
        <div className={s.post}>
            <div>
                <div> {props.infoPost} </div>
                <div className={s.like_count}> Like-{props.likeCount} </div>
            </div>
        </div>
    )
}

function MyPosts(props){

    let informationInPosts = props.informationInPost

    let itemPost = informationInPosts.map((item)=><Post infoPost = {item.contentPost} likeCount={item.likeCount}/>)

    let newPostElement = React.createRef()
    function addPost(){
     let text = newPostElement.current.value
        alert(text)
    }


    return(
        <div className={s.my_posts}>
            <div>
                <div>
                    <textarea className={s.textarea_post} name="#" id="" ref={newPostElement}></textarea>
                </div>
                <div className={s.block_button}>
                    <button className={s.button_add_post} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {itemPost}
            </div>
        </div>
    )
}
export default MyPosts;