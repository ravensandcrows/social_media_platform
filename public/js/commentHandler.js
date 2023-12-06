const commentFormHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector('#comment-body').value.trim();
    const post_id = document.querySelector('#post_id').value;

    console.table({ post_id, description });

    if (description && post_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, description }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            alert('Looks like this worked!');
            document.location.reload();
        } else {
            alert('Please try again');
        }
    }
};

document.querySelector('#comment-button').addEventListener('click', commentFormHandler);