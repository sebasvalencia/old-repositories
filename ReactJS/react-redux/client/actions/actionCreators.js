
//Actions are objects

//Increment we past index wich post we are going to increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index //little info no all the information
    }
}

//add comment
export function addComment(postId, author, comment){
    console.log('Dispatch add comment');
    return {
        type:'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment (postId, i=whatCommentShouldIRemove)
export function removeComment(postId, i){
    return{
        type:'REMOVE_COMMENT',
        postId,
        i
    }
}