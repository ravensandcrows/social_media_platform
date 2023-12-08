const commentFormHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector(`[data-description='${event.target.id}']`).value;
    const post_id = event.target.id;

    console.log(document.querySelector(`[data-description='${event.target.id}']`).value)
    console.table({ post_id, description });

    if (description && post_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, description }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Please try again');
        }
    }
};

const commentButton = document.querySelectorAll('.comment-button');
for (var i = 0; i < commentButton.length; i++) {
    commentButton[i].addEventListener('click', commentFormHandler);
};

