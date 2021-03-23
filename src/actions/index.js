import jsonplaceholder from '../apis/jsonPlaceholder';

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