// const posts=[
//     {title:'Post One', body:'This is post one', createdAt: new Date().getTime(),},
//     {title:'Post Two', body:'This is post two', createdAt: new Date().getTime(),},
//   ];

//   let intervalId=0;
//   function getPosts() {
//   clearInterval(intervalId)
//   intervalId= setInterval (()=>{
//     let output='';
//   for (let i = 0; i < posts.length; i++) {
//     output+=`<li>${posts[i].title} - last updated ${Math.floor((new Date().getTime() - posts[i].createdAt)/1000)} seconds ago </li>`;
//   }
//   document.body.innerHTML= output;
//   },1000);

//   }

//   function createPost(post, callback){
//     setTimeout(()=>{
//       posts.push({...post, createdAt : new Date().getTime()});
//       callback();
//     }, 4000);
//   }

//   function create4thPost(post,callback){
//     setTimeout(()=>{
//       posts.push({...post, createdAt : new Date().getTime()});
//       callback();
//     },6000);
//   }

//   createPost({title:'Post Three',body:'This is post Three'},getPosts);
//   create4thPost({title:'Post Four',body:'This is post four'},getPosts);

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
