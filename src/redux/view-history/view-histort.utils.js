export const addPostToViewHistory = (history,post) =>{
    const index = history.indexOf(post);
    if (index>0) {
        history.splice(index,1);
        return [post,...history];
    }else{
        return history;
    }
}