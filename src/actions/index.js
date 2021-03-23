import jsonplaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// now we will be calling fetchPotstAndUsers alone
// no other action creator will be called

export const fetchPotstAndUsers = () => {
    // second argument that redux thunk calls our
    // inner functions with for all action creators is getState argument
    return async ( dispatch , getState ) => {
        // fetchPotstAndUsers will call other action creator for us
        // for dipatch we call our action creator inside dispatch function
        // console.log('starting to fetch posts');
        await dispatch(fetchPosts())
        // console.log(getState().posts)
        // console.log('fetched post')

        // using 'lodesh' to fetch unique ids only
        // mapping over the posts and getting 'userId'
        // wrapping it inside 'uniq' to get only unique id
        const userIds =  _.uniq(_.map(getState().posts, 'userId'))
        // console.log(userIds)

        // if you dont want to use lodash Vanilla Js can do the same
        // console.log(getState().posts)
        // const userIdS = [...new Set(getState().posts.map( (post)=> post.userId ))]
        // console.log(userIdS)

    // now for each unique id we will dipatch fetchUser
    userIds.forEach( id => dispatch(fetchUser(id)) );
    }
}

export const fetchPosts = () => {

    // adding function to action | redux-thunk
    return async ( dispatch )  => {
        const response = await jsonplaceholder.get('/posts')
        
        // so when we return a function, we will call
        // the dispatch function manually with the action 
        // we are trying to dispatch
        dispatch( { type: 'FETCH_POSTS', payload: response.data } )
    };
}

// creating another action to fetch user details
export const fetchUser = ( id ) =>{

    return async ( dispatch ) => {    
        const response = await jsonplaceholder.get(`/users/${id}`)

        dispatch( { type: 'FETCH_USER', payload: response.data } )
    };
}