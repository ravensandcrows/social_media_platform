const postFormHandler = async (event) => {
    
    event.preventDefault();

    const title = document.querySelector('#titlePost').value.trim();
    const description = document.querySelector('#description').value.trim();
    const location = document.querySelector('#location').value.trim();
    const date = document.querySelector('#date').value.trim();
    const fileInput = document.querySelector('#myFile');
    const formData = new FormData();

    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        // Array of allowed image file extensions
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];


        if (allowedExtensions.indexOf(fileExtension) === -1) {

            alert("Please upload a valid image file (jpg, jpeg, png, gif).");
            return;
        }

        // Append the image file to FormData
        formData.append('image', fileInput.files[0]);
    } else {

        alert("Please select an image file.");
        return;
    };

    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('date', date);

    for (const value of formData.entries()) { console.log(value); }

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            document.location.assign('/dashboard');
        } else {
            alert('Post could not be created')
        }
    };

    document.querySelector('#postForm').addEventListener('submit', postFormHandler)