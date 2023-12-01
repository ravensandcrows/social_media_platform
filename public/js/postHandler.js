const googleScript = 

const postFormHandler = async (event) => {
    
    event.preventDefault();

    const postTitle = document.querySelector('#post-title').value.trim();
    const postBody = document.querySelector('#post-body').value.trim();
    const postLocation = document.querySelector('#post-location').value.trim();

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