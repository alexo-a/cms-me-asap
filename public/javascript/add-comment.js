/*const commentForm = `<form class="comment-form">
    <div>
        <textarea name="comment-body"></textarea>
    </div>
    <div>
        <button type="submit">Add Comment</button>
    </div>
</form>`
let showCommentForm = function(el) {
    console.log("test")
    var owner = el.closest("article");
    var newEl = document.createElement("FORM")
    newEl.innerHTML = commentForm;
    owner.appendChild(newEl);
}
//document.querySelectorAll(".title").addEventListener('click', showCommentForm);
const titles = document.querySelectorAll(".title")
 for (const title of titles) {
    title.addEventListener("click", function(){showCommentForm(title)})
} */