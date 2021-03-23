import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import  { fetchUser } from '../actions';

const UserHeader = ( props ) => {
    // console.log(props) // {userId: 10, fetchUser: ƒ}
    // userId is a props which we are sending  from PostList file
    
    const { user } = props;

    useEffect( () => {
    props.fetchUser(props.userId)
    }, [] )

    
    // const user = props.users.find( user => {
    //                 return user.id === props.userId
    // });

    return ( 
        <div>
            {
             ( !user ) ? <div>Loading....</div> 
            :  (<div className="header">{user.name}</div>)
            }
        </div>
    );
}

// second argument( here OwnProps) is reference to the props that we are about to send 
// in our component UserHeadder
// help full to do some pre-calculation on data before sending it into 
// the component
const mapStateToProps = (state, OwnProps ) =>{
    return { user: state.users.find( user => user.id === OwnProps.userId ) }
}


export default connect( mapStateToProps, { fetchUser } ) (UserHeader);