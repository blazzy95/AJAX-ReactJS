import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

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
