import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        return (
            <div className ="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path = "/new-post" component={NewPost}/>
                    <Route path = "/posts" component={Posts}/>
                    <Route render ={() => <h1>Not found</h1>}/>
                    {/*<Redirect from = "/" to="/posts" />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;

