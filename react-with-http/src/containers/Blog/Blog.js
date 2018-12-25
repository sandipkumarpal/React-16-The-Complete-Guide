import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({ posts : response.data });
        })
    }

    render () {
        const posts = this.state.posts.map(post => 
            <Post title={post.title} key={post.id} />
        );
        return (
            <div className='Blog'>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
