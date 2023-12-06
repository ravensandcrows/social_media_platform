const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentData = document.querySelector('p[name="comment"]').value.trim();
    const post_id = document.querySelector('input[name="post_id"]').value;

    if (commentData) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ post_id, commentData }),
            headers: { 'Content-Type': 'application/json' },
        })
    }

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Please try again');
    }
};

document.querySelector('#comment-button').addEventListener('click', commentFormHandler);