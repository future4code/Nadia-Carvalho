class Post {
  constructor(title, author, post) {
    this.title = title;
    this.author = author;
    this.post = post;
  }
}

function newPost() {

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const post = document.getElementById("post");

  if (title.value === "" || author.value === "" || post.value === "") {
    alert("Todos os campos devem ser preenchidos!");
    return false;
  }

  let newPost = new Post(title.value, author.value, post.value);
  console.log("New Post", newPost);

  return newPost;

}