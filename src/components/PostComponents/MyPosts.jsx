import s from "./MyPost.module.css"

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

    let informationInPosts = [
        {contentPost: "I like web development, like it if you like it too", likeCount: 35},
        {contentPost: "sometimes I can't keep up with my thoughts", likeCount: 74},
        {contentPost: "I once dreamed of an endless summer", likeCount: 23},
    ]

    let itemPost = informationInPosts.map((item)=><Post infoPost = {item.contentPost} likeCount={item.like}/>)

    return(
        <div className={s.my_posts}>
            <div>
                <div>
                    <textarea className={s.textarea_post} name="#" id="" ></textarea>
                </div>
                <div className={s.block_button}>
                <button className={s.button_add_post}>Add post</button>
                </div>
            </div>
            <div>
                {itemPost}
            </div>
        </div>
    )
}
export default MyPosts;