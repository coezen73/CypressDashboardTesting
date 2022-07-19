const posts = [
    {title: "Post One ", body : " This is post one "}, 
    {title: "Post Two ", body: " This is post two " },
];
// Create as function which will get the post:
function getPosts(){
    setTimeout(() => {
        let output = "";                    // Provided a construction with an empty string
        posts.forEach ((post,index) => {    // for-each loop to check inside the postd one by one
            output += `${post.title};`
    });
    console.log( "post:  " , output  + " " );
  },1000);
}
function createPosts(post,callback){
    setTimeout(()=> {
        posts.push(post);
        callback
    }, 2000);
}
//getPosts();

createPosts({ title: "Post Three", body: "This is post three"},getPosts());

// createPosts({ title: "Post Four", body: "This is post four"},getPosts());
  