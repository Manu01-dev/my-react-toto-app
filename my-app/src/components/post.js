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
    const { id, post } = this.props.post;

    return (
      <div className="item animate__animated animate__pulse" style={this.getStyle()}>
        <p className="p" style={this.toogleStyle()}>
        <span className="p-span">
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="checkbox" />
          <input  
          type="text" 
          id={id} 
          value={post} 
          onChange = {
            (e) => {
              props.updateItem(e.target.value, id)
            }
          }
          />
          </span>
          <span className="span">
          <button onClick = {this.props.deletePost.bind(this, id)} className="del">Delete</button>
          </span>
          </p>
      </div>
      )
  }
}

export default Post;