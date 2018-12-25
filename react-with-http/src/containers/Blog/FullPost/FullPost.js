import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        console.log(this.props);
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>
        if(this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>title</h1>
                    <p>body</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => {}}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;