const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}

function DeletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length>0) {
const lastelement=posts.pop()
resolve(lastelement);
      }
      else{
        reject('Array is empty now');
      }
    },1000);
  });
}

createPost({ title: "Post Three", body: "this is post three" }).then(()=>{
    getPosts()
    DeletePost().then(()=>{
        getPosts();
        DeletePost().then(()=>{
            getPosts();
            DeletePost().then(()=>{
                getPosts();
                DeletePost().then(()=>{})
                .catch((err)=>{
                    console.log('Inside catch block',err)
                })
            })
        })
    })
})
.catch(err=>console.log(err))
