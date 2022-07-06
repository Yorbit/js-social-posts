const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=11",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=77"
        },
        "likes": 112,
        "is_liked": true,
        "created": "Yesterday"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=33",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=61"
        },
        "likes": 93,
        "is_liked": true,
        "created": "About a month ago"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=88",
        "author": {
            "name": "Giovanni Muciaccia",
            "image": "https://unsplash.it/300/300?image=50"
        },
        "likes": 1223,
        "is_liked": true,
        "created": "05-22-2022"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Francesca Villa",
            "image": "https://unsplash.it/300/300?image=55"
        },
        "likes": 1623,
        "is_liked": true,
        "created": "05-02-2022"
    },
];

posts.forEach((element, index) => {

    const newContainer = createElement(element);

    parentWrapper(newContainer);
});

function parentWrapper(element) {

    const wrapper = document.getElementById('container');

    wrapper.append(element);

    return wrapper;
}

function createElement(posts) {

    const newElement = document.createElement('div');

    newElement.className = ('post');

    newElement.innerHTML = `
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${posts.author.image}" alt="${posts.author.name}">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts.author.name}</div>
                <div class="post-meta__time">${posts.created}</div>
            </div>
        </div>
    </div>
    
}