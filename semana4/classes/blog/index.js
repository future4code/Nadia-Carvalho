class Post {
  constructor(title, author, post) {
    this.title = title;
    this.author = author;
    this.post = post;
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

  return newPost;

}
