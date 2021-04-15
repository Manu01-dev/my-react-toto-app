import React, {Component} from "react";
import Post from './post';




export class Posts extends Component {
  render(props) {
    //console.log(this.props.content);
    return this.props.data.map((post) => (
        <Post key = {post.id} post = {post} markComplete = {this.props.markComplete} updateItem = {this.props.updateItem} deletePost = {this.props.deletePost}/>
    ))
  }
}

export default Posts;