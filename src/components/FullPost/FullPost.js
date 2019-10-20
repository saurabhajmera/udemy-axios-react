import React, {Component} from 'react';
import Axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectedPost){
            if (!this.state.loadedPost || (this.state.loadedPost.id !== this.props.selectedPost)) {
                Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.selectedPost).then(res => {
                    this.setState({loadedPost: res.data});

                });
            }
        }
    }

    render () {

        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if (this.props.selectedPost) {
            if (this.state.loadedPost) {
                post = (
                    <div className="FullPost">

                        <h1>{this.props.selectedPost} {this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                        <div className="Edit">
                            <button className="Delete">Delete</button>
                        </div>
                    </div>

                );
            } else {
                post = <p style={{textAlign: 'center'}}>Loading...!</p>;
            }

        }

        return post;
    }
}

export default FullPost;
