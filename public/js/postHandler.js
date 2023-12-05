

const postFormHandler = async (event) => {
    
    event.preventDefault();

    const title = document.querySelector('#titlePost').value.trim();
    const description = document.querySelector('#description').value.trim();
    const location = document.querySelector('#location').value.trim();
    const date = document.querySelector('#date').value.trim();ç

    if (postTitle && postBody && postLocation) {
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify({ postTitle, postBody, postLocation }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Post could not be created')
        }
    }
};