const Tweeter = function () {
    _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    var _postIdCounter = 2
    var _commentIdCounter = 6

    const getPosts = function () {
        return _posts
    }

    const addPost = function (text) {
        _postIdCounter++
        let newPost = {
            text: text,
            id: "p" + _postIdCounter,
            comments: []
        }
        _posts.push(newPost)

    }

    const removePost = function (id) {
        const index = _posts.findIndex(obj => {
            return obj.id === id
        })
        _posts.splice(index, 1)
    }

    const addComment = function (commentText, postID) {
        _commentIdCounter++
        let newComment = {
            id: "c" + _commentIdCounter,
            text: commentText
        }
        const post = _posts.find(obj => {
            return obj.id === postID
        })
        post.comments.push(newComment)
    }

    const removeComment = function (postID, commentID) {
        const post = _posts.find(post => {
            return post.id === postID
        })
        const commentIndex = post.comments.findIndex(obj => obj.id === commentID)
        post.comments.splice(commentIndex, 1)
        console.log(post.comments)
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }



}
