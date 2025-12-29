function createPost(){
  let text = document.getElementById("post").value;
  fetch('/post', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({text})
  });
}