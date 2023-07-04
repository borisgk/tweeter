const Renderer = function () {

    function renderPosts (posts) {
        $("#posts").text("")

        for (post of posts) {
            // post container and text
            let postElement = $(`<div class="post" data-id="${post.id}"><p class="post-text">${post.text}</p></div>`)

            // comments container and comments
            let commentsElement = $(`<div class="comments"></div>`)
            for (comment of post.comments) {
                commentElement = $(`<div data-id="${comment.id}"><span class="delete-comment" data-id="${comment.id}" data-postid="${post.id}">x </span>${comment.text}</div>`)
                commentsElement.append(commentElement)
            }
            postElement.append(commentsElement)

            // comment input field and button
            let commentInput = $(`<div class="comments"><input type="text" placeholder="Got something to say?" id="comment"><button type="submit" class="comments" data-postid="${post.id}">Comment</button>`)
            postElement.append(commentInput)

            // delete post button
            let deletePost = $(`<div><button name="delete" class="delete" data-postid="${post.id}">Delete Post</button>`)
            postElement.append(deletePost)

            $("#posts").append(postElement)
        }

    }

    return {
        renderPosts
    }
}