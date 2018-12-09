import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        return (
            <div className="FullPost">
                <h1>title</h1>
                <p>body</p>
                <div className="Edit">
                    <button className="Delete" onClick={() => {}}>Delete</button>
                </div>
            </div>

        );
    }
}

export default FullPost;