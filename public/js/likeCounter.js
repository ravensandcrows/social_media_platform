let isLiked = false;
const post_id = document.querySelector('#post_id').value
let likeBtnEl = document.querySelector('.likeBtn')

async function liked(event) {
  let likeCount = parseInt(document.querySelector(".likeCount").textContent);
  likeCount++
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

likeBtnEl.addEventListener('click', liked)


function toggleLike() {
  isLiked = !isLiked;
  if (isLiked) {
    document.querySelector(".likeBtn").classList.add("liked");
  } else {
    document.querySelector(".likeBtn").classList.remove("liked");
  }
}