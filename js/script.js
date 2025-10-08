const postBtn = document.getElementById('postBtn');
const username = document.getElementById('username');
const message = document.getElementById('message');
const postList = document.getElementById('postList');


window.onload = () => {
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
  savedPosts.forEach(addPostToList);
};


postBtn.addEventListener('click', () => {
  const user = username.value.trim();
  const msg = message.value.trim();

  if (user === '' || msg === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const post = { user, msg, date: new Date().toLocaleString() };
  addPostToList(post);
  savePost(post);

  username.value = '';
  message.value = '';
});


function addPostToList(post) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${post.user}</strong> <em>(${post.date})</em><br>${post.msg}`;
  postList.prepend(li);
}


function savePost(post) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
}
