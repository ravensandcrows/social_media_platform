let isLiked = false;
let likeBtnEl = document.querySelectorAll('.likeBtn')

async function liked(event) {
  let likeCount = event.target.parentElement.
    previousElementSibling.children[0].textContent
  console.log(likeCount);
  likeCount++
  const post_id = event.target.getAttribute("id")
  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({ likes: likeCount }),
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Please try again');
  }
};

likeBtnEl.forEach(function (likeBtn) {
  likeBtn.addEventListener('click', liked)
})

function toggleLike() {
  isLiked = !isLiked;
  if (isLiked) {
    document.querySelector(".likeBtn").classList.add("liked");
  } else {
    document.querySelector(".likeBtn").classList.remove("liked");
  }
}