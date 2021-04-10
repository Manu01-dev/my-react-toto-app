import React, {Component} from "react";
import Header from "./header";
import Posts from "./components/posts";
import AddItem from "./components/addItem";

import './app.css';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
          {
            id: '1',
            post: 'wash hands',
            complete: false,
          },
          {
            id: '2',
            post: 'wear mask',
            complete: false,
          },
          {
            id: '3',
            post: 'keep distance',
            complete: false,
          },
          {
            id: '4',
            post: 'Always Santise',
            complete: false,
          }
        ]
  
    }
      }

      //Add item
      addItem = (post) => {
       //console.log(post);
       const newItem = {
         id: 4,
         post: post
       }
        this.setState({data: [...this.state.data, newItem]})
      }

          //Update item
      updateItem = (post) => {
       //console.log(post);
       const newItem = {
         post: post
       }
        this.setState({data: [...this.state.data, newItem]})
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
      <AddItem addItem={this.addItem}/>
      <Posts data = {this.state.data} markComplete = {this.markComplete} deletePost = {this.deletePost}/>
      </div>
      </>
      )
  }
}

export default App;
