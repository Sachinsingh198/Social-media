import {createContext, useReducer} from 'react';



export const PostList = createContext({
    postList: [],
    addPost: () =>{},
    deletePost: () => {},
});
const postListReducer = (currPostList, action)=>{
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList; 
};
    
const PostListProvider = ({children}) =>{
    const [postList, dispatchPostList] = useReducer(
        postListReducer, 
        DEFAULT_POST_LIST
    );


    const addPost = (userId,postTitle,postBody,reactions,tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title : postTitle,
                body: postBody,
                reaction: reactions,
                userId: userId,
                tags: tags
            }
        })
    };


    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload:{
                postId,
            }
        })
    };
    return( <PostList.Provider value = {{postList,addPost,deletePost}} >
        {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title : 'Going to Mumbai',
        body: 'Hi Friends, I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace Out',
        reaction: 23,
        userId: 'user-9',
        tags: ['vacation', 'Mumbai', 'Enjoying']
    },
    {
        id: '2',
        title : 'Pass ho gaye Bhai',
        body: '4 saal ki masti ke baad bhi ho gaye hain paas. Hard to believe',
        reaction: 15,
        userId: 'user-15',
        tags: ['Graduating', 'unbelievable']
    }

]

export default PostListProvider;