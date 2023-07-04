const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

// add a post
function postCreate () {
    if (input = $("#input").val()) {
        tweeter.addPost($("#input").val())
        renderer.renderPosts(tweeter.getPosts())
    }
}

// delete comment
$("body").on("click", ".delete-comment", function () {
    tweeter.removeComment($(this).data("postid"), $(this).data("id"))
    renderer.renderPosts(tweeter.getPosts())
})

// delete post
$("body").on("click", ".delete", function () {
    // traversing the DOM, although we have the post ID in the button
    let postID = $(this).closest("div.post").data("id")
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})

// add comment
$("body").on("click", "button.comments", function () {
    let commentText = $(this).closest("div.comments").find("#comment").val()
    if (commentText) {
        let postID = $(this).closest("div.post").data("id")
        tweeter.addComment(commentText, postID)
        renderer.renderPosts(tweeter.getPosts())
    }
})
