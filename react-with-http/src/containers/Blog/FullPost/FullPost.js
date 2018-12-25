import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedPost: null
        }
        this.deletePostHandler = this.deletePostHandler.bind(this);
    }
    componentDidUpdate() {
        const { id } = this.props;
        const { loadedPost } = this.state;
        console.log(!loadedPost)
        if(id) {
            if(!loadedPost || (loadedPost && loadedPost.id !== id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
                .then(response =>{
                    this.setState({ loadedPost: response.data }); 
                    console.log(response.data);
                });
            }
        }
    }
    deletePostHandler() {
        const { id } = this.props;
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => console.log(response));
    }
    render () {
        console.log(this.props);
        const { loadedPost } = this.state;
        const { id } = this.props;
        let post = null;
        if(id) {
            post = <p style={{textAlign: "center"}}>Loading...</p>
        } else {
            post = <p style={{textAlign: "center"}}>Please select a Post!</p>
        }
        if(loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{loadedPost.title}</h1>
                    <p>{loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;