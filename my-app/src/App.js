import React, {Component} from "react";
import Header from "./header";
import Posts from "./components/posts";
import AddItem from "./components/addItem";
import { v4 as uuidv4 } from "uuid";

import './app.css';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
          {
            id: uuidv4(),
            post: 'HTML',
            complete: false,
          },
          {
            id: uuidv4(),
            post: 'CSS',
            complete: false,
          },
          {
            id: uuidv4(),
            post: 'Javascript',
            complete: false,
          },
          {
            id: uuidv4(),
            post: 'Git',
            complete: false,
          }
        ]
  
    }
      }

      //Add item
      addItem = (post) => {
       //console.log(post);
       const newItem = {
         id: uuidv4(),
         post: post
       }
        this.setState({data: [...this.state.data, newItem]})
      }

      //Update item

     // updateItem = this.updateItem.bind(this);

      updateItem = (text, id) => {
        const items = this.state.data;

       items.map((item) => {
        if(item.id === id) {
          item.post = text;
        }
       });

      }



      //mark Complete
      markComplete = (id) => {
        this.setState({ data: this.state.data.map(post => {
          if(post.id===id) {
            post.complete = !post.complete
          }
          return post;
        })});
      }

      //Delete post
      deletePost = (id) => {
        this.setState({ data: [...this.state.data.filter(post => post.id !==id)] });
      }

  render() {
    return (
      <>
      <div className="container">
      <Header />
      <AddItem addItem = {this.addItem} />
      <Posts data = {this.state.data} markComplete = {this.markComplete} updateItem = {this.updateItem} deletePost = {this.deletePost}/>
      </div>
      </>
      )
  }
}

export default App;
