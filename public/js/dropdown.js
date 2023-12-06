function toggleComments() {
    var commentsDiv = document.querySelector(".card-comment");
    if (commentsDiv.style.display === "none" || commentsDiv.style.display === "") {
      commentsDiv.style.display = "block";
    } else {
      commentsDiv.style.display = "none";
    }
}