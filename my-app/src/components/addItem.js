import React, {Component} from "react";

import './styles.css';



export class AddItem extends Component {
    state = {
        post: ''
    }


    onSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(this.state.post);
        this.setState({post: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    updateItem = (id) => {
      console.log(id);
    }





  render(props) {
    return (
      <form onSubmit={this.onSubmit} className="form">
          <input 
          type="text" 
          name="post" 
          value={this.state.post} 
          onChange={this.onChange}
          className="input"
          setItem = {this.setItem}
          />
          <input type="submit" value="submit" className="submit"/>
      </form>
      )
  }
}

export default AddItem;