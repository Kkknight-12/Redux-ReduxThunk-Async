import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPotstAndUsers } from '../actions'
import UserHeader from "./UserHeader";

const PostList = (props) => {
    // console.log(props) //{fetchPosts: ƒ}

    // replacing componentDidMount with useEffect
    useEffect( ( )=> {
        // props.fetchPosts();
        props.fetchPotstAndUsers();
    },[]);

    // console.log(props.posts)

    const renderPost = () => {
        console.log('i ran')

        return (
            props.posts.map( (post) => {
                return(
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon user">
                        </i>
                            <div className="content">
                                <div className="description">
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                                <UserHeader userId={post.userId}/>
                            </div>
                    </div>
                )
            } )
        )
    }

    return ( 
        <div className="ui realxed divided list">
            <h1>PostList</h1>
            {renderPost()}
        </div>
    );
}

const mapStateToProps = (state) =>{
    // console.log(state) // contain our reducer
    return { posts: state.posts }
}

export default connect( mapStateToProps,
    // { fetchPosts: fetchPosts } 
    { fetchPotstAndUsers : fetchPotstAndUsers }
    )(PostList);