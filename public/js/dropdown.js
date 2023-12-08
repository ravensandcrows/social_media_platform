function toggleComments(button) {
  var post = button.closest('.post');
  var commentsDiv = post.querySelector('.card-comment');
  if (commentsDiv.style.display === "none" || commentsDiv.style.display === "") {
    commentsDiv.style.display = "block";
  } else {
    commentsDiv.style.display = "none";
  }
}