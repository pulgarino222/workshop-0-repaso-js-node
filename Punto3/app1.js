document.getElementById('fetch-posts').addEventListener('click', () => {
    fetchPosts();
});

const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(posts => {
            displayPosts(posts);
        })
        .catch(error => {
            displayError(error);
        });
};

const displayPosts = (posts) => {
    let postList = document.getElementById('post-list');
    postList.innerHTML = ''; // Limpiar contenido anterior

    posts.forEach(post => {
        let row = `
            <tr>
                <th scope="row">${post.userId}</th>
                 <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `;
        postList.innerHTML += row;
    });
};

const displayError = (error) => {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = `Error: ${error.message}`;
};
