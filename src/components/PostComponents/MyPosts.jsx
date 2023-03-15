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
                <Post infoPost={"I like web development, like it if you like it too"} likeCount={43}/>
                <Post infoPost={"sometimes I can't keep up with my thoughts"} likeCount={15}/>
                <Post infoPost={"I once dreamed of an endless summer"} likeCount={100}/>
            </div>
        </div>
    )
}
export default MyPosts;