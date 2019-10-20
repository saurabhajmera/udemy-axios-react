import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';


class  Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
           const transformedData = res.data.slice(0, 10).map(item=>({...item,author:"Mintu"}));
           this.setState((currentState)=>{
               let newState = {...currentState};
               newState.posts = transformedData;
               return newState;
           });
        });
    }

    postClickHandler = (postId) => {
        console.log(postId);
        this.setState((currentState) => {
            let newState = {...currentState};
            newState.selectedPostId = postId;
            return newState;
        })
    };


    render = ()=>{
        let postsJSX = this.state.posts.map(post=>{
            return <Post key={post.id} title={post.title} body={post.body} author={post.author} clickHandler={() => {
                this.postClickHandler(post.id)
            }}/>;
        });

        return (
            <div>
            <section className="Posts">
               {postsJSX}
            </section>
            <section>
                <FullPost selectedPost={this.state.selectedPostId}/>
            </section>
            <section>
                <NewPost />
            </section>
        </div>
        )
    };


};

export default Blog;
