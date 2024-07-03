function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(postElement);
    });
}

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            displayPosts(data);
        })
        .catch(error => {
            console.error('Error:', error);
            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
        });
}

fetchPosts();