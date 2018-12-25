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
            posts: [],
            selectedPostId: null
        }
        this.selectedPostHandler = this.selectedPostHandler.bind(this);
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const slicePosts = response.data.slice(0, 4);
            const posts = slicePosts.map(post => ({
                    ...post,
                    author: 'Sandip'
                })
            );
            console.log(posts)
            this.setState({ posts });
        })
    }

    selectedPostHandler(id) {
        this.setState({ selectedPostId: id });
    }

    render () {
        const posts = this.state.posts.map(post => 
            <Post 
                title={post.title} 
                key={post.id} 
                author={post.author} 
                clicked={() => this.selectedPostHandler(post.id)}
            />
        );
        return (
            <div className='Blog'>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
