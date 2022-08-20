const form = document.getElementById('form')
const msg = document.getElementById('msg')
const post = document.getElementById('post')
const posts = document.getElementById('posts')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    
})

function postsArea(){
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    posts.appendChild(ul)
    ul.appendChild(li)
    // console.log(posts)
    // li.innerText = 'I love that move'
    li.innerHTML = `
        <p>Hello world post 1</p>
        <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
        </span>
    `
}
postsArea()



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // console.log(e);
//     formValidation();  
// })

// const data = {}

// const acceptData = () => {
//     data["text"] = post.value;
//     console.log(data);
// }

// const formValidation = () => {
//     if (post.value === "") {
//       // Other codes are here
//     } else {
//       // Other codes are here
//       acceptData();
//     }
//   };
