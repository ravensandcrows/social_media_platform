const deletePostHandler = async (event) => {

    const post_id = event.target.id;

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        // headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Please try again');
    }
};

const deleteBtn = document.querySelectorAll('.delete-button');
for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', deletePostHandler);
};

