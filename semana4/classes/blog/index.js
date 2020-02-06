class Post {
  constructor(title, author, post) {
    this.title = title;
    this.author = author;
    this.post = post;
  }
  render = () => {
    let content = "";
    content += "<article class='render-post'>"
    content += "<h3>" + this.title + "</h3>"
    content += "<h4> Posted by " + this.author + "</h4>"
    content += "<p>" + this.post + "</p>"
    content += "</article>"
    return content;
  }
}

let listPosts = []

function pushListPost(post) {
  listPosts.push(post);
  console.log("New Post", post);
  console.log("New List Post", listPosts);
}

function newPost() {

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const post = document.getElementById("post");

  if (title.value === "" || author.value === "" || post.value === "") {
    alert("Todos os campos devem ser preenchidos!");
    return null;
  }

  let newPost = new Post(title.value, author.value, post.value);
  title.value = ""
  author.value = ""
  post.value = ""

  pushListPost(newPost);
  renderPosts();

  return newPost;

}

function renderPosts() {
  
  const postList = document.getElementById("post-list");
  postList.innerHTML = ""

  for (let i = 0; i < listPosts.length; i++) {
    const post = listPosts[i];
    postList.innerHTML += post.render()
  }

}