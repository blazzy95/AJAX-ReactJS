import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//set default global variables
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'applications/json';

axios.interceptors.request.use(request =>{
    console.log(request);
    // we can edit requests here before sending it further
    return request;
}, error => {
    console.log(error);
    //return the error component and let the component receiving the request handle the error again
    return Promise.reject(error); 
});

axios.interceptors.response.use(response =>{
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error); 
});

//axios.interceptors.request.eject(myInterceptor); to remove incerceptors

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
