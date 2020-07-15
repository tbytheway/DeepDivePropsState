import React, { Component } from "react";
import axios from 'axios';
export default class Api extends Component {
  constructor() {
    super();
    this.state = {
      journals: []
    };
    this.renderPosts = this.renderPosts.bind(this)
  }
  renderPosts() {
    return this.state.journals.map(journal => {
      return (
        <div key={journal.id}>
          <h1>{journals.title}</h1>
          <p>{journals.content}</p>
        </div>
      );
    });
  };
  componentDidMount() {
    axios.get("http://localhost:5000/journals")
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        this.setState({
          journals: [data]
        });
      })
      .catch(err => console.error("Fetch didn't work", err));
  }
  render() {
    return (
      <div>
        <h1>API</h1>
        <p>{this.renderPosts()}</p>
      </div>
    );
  }
}