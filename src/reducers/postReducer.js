export default ( state = [], action ) => {

    // if( action.type === 'FETCH_POSTS' ){
    //     return action.payload;
    // }
    // return state;

    // we are replacing our if else statement with switch case
    switch( action.type ){

        case 'FETCH_POSTS':
            return action.payload;
        
        default:
            return state;
    }
}