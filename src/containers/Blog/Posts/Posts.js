import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component{
    
    state =  {
        posts:[],
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId:id});
    }

    componentDidMount(){
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return{
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts:updatedPosts});
        }).catch(error => {
            console.log(error);
        });
    }

    render(){
    
    let posts = <p style = {{textAligh: 'center'}}>Something went wrong</p>
    if(!this.state.error)
    {
        posts = this.state.posts.map(
            posts =>{
                return <Post key = {posts.id} title={posts.title} author = {posts.author} clicked ={() => this.postSelectedHandler(posts.id)}/>;
            });
    }
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;