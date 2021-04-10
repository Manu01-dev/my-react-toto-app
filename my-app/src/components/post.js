import React, {Component} from "react";

import './styles.css';



export class Post extends Component {

  getStyle = () => {
    return {
      backgroundColor: this.props.post.complete ? 'rgb(37, 37, 37)': 'black'
    }
  }

  toogleStyle = () => {
      return {
        textDecoration: this.props.post.complete ? 'line-through': 'none'
      }
  }

  render(props) {
    const { id, post, complete } = this.props.post;

    console.log(complete);
    return (
      <div className="item" style={this.getStyle()}>
        <p className="p" style={this.toogleStyle()}>
        <span className="p-span">
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="checkbox" />
          { post }
          </span>
          <span className="span">
          <button style={{ marginLeft: '2rem' }} className="btn">Update</button>
          <button onClick = {this.props.deletePost.bind(this, id)} className="del">Delete</button>
          </span>
          </p>
      </div>
      )
  }
}

export default Post;