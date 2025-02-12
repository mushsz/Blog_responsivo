// Dados dos posts
const postsData = [
    {
        title: "Post 1",
        description: "Descrição do primeiro post.",
        image: "images/image1.png",
    },
    {
        title: "Post 2",
        description: "Descrição do segundo post.",
        image: "images/image2.png",
    },
    {
        title: "Post 3",
        description: "Descrição do terceiro post.",
        image: "images/image3.png",
    },
    {
        title: "Post 4",
        description: "Descrição do quarto post.",
        image: "images/image4.png",
    },
];

// Seleciona o container de posts
const postsContainer = document.getElementById("posts");

// Renderiza os posts dinamicamente
function renderPosts() {
    postsData.forEach((post, index) => {
        // Cria o elemento do post
        const postElement = document.createElement("article");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="post-content">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <div class="comment-section">
                    <textarea id="comment-input-${index}" placeholder="Adicione um comentário..." rows="3"></textarea>
                    <button onclick="addComment(${index})">Comentar</button>
                    <div class="comments" id="comments-${index}"></div>
                </div>
            </div>
        `;

        // Adiciona o post ao container
        postsContainer.appendChild(postElement);
    });
}

// Função para adicionar comentários
function addComment(postIndex) {
    const commentInput = document.getElementById(`comment-input-${postIndex}`);
    const commentsContainer = document.getElementById(`comments-${postIndex}`);

    if (commentInput.value.trim() !== "") {
        const comment = document.createElement("p");
        comment.textContent = commentInput.value;
        commentsContainer.appendChild(comment);
        commentInput.value = "";
    } else {
        alert("Por favor, escreva um comentário antes de enviar.");
    }
}
// Dados dos posts populares (simulação)
const popularPostsData = [
    { title: "Dicas de JavaScript", link: "#post1" },
    { title: "Como criar sites responsivos", link: "#post2" },
    { title: "Segredos do HTML5", link: "#post3" },
    { title: "CSS para iniciantes", link: "#post4" },
];

// Seleciona o container dos posts populares
const popularPostsContainer = document.getElementById("popular-posts-list");

// Função para renderizar os posts populares
function renderPopularPosts() {
    popularPostsData.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${post.link}">${post.title}</a>`;
        popularPostsContainer.appendChild(listItem);
    });
}

// Inicializa a renderização dos posts populares
renderPopularPosts();


// Inicializa a renderização dos posts
renderPosts();
// Dados dos posts mais recentes
const recentPostsData = [
    { title: "Dicas de JavaScript", link: "#post1", image: "images/post1.jpg" },
    { title: "Como criar sites responsivos", link: "#post2", image: "images/post2.jpg" },
    { title: "Segredos do HTML5", link: "#post3", image: "images/post3.jpg" },
    { title: "CSS para iniciantes", link: "#post4", image: "images/post4.jpg" },
];

// Seleciona o container dos posts mais recentes
const recentPostsContainer = document.getElementById("recent-posts-list");

// Função para renderizar os posts mais recentes
function renderRecentPosts() {
    recentPostsData.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <a href="${post.link}">${post.title}</a>
        `;
        recentPostsContainer.appendChild(listItem);
    });
}

// Inicializa a renderização dos posts mais recentes
renderRecentPosts();
