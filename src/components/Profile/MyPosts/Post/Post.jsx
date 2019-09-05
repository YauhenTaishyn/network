import React from 'react';
import s from './Post.module.css';




const Post = (props) => {

  return (
  <div className={s.item}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4r7SBkmqVCU1b_iSYS5oLER4toEIz3USVpZW-A_gm4GlACoOqg' />
    {props.message}
    <div>
    <span>like</span> <br />
    <span>dislike</span>
    </div>
  </div>
  )
    }
export default Post;