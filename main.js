const form = document.getElementById('form')
const msg = document.getElementById('msg')
const post = document.getElementById('post')
const posts = document.getElementById('posts')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    // console.log(e.target.post.value)
    createPost(e.target.post.value)
    deleteBtn()
    editBtn()
    form.reset()
})

// AREA W/ ALL POSTS LISTED:
function createPost(comment){
    // console.log(comment);
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `
        <li> 
        <p>${comment}</p>
        <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
        </span>
        </li>
    `;
}
// createPost(); You do not need to invoke it here. Only in the form event listener

// DELETE COMMENT:
function deleteBtn(){
    const deleteBtn = document.getElementsByClassName('fas fa-trash-alt')
    // console.log(deleteBtn)
    for(let btn of deleteBtn){
        btn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove()
        })
    }
}

// EDIT COMMENT:
// When edit btn is clicked 1. place the comment back in the textarea(post) 2. delete it from the ul
function editBtn(){
    const editBtn = document.getElementsByClassName('fas fa-edit')
    // console.log(editBtn)
    for(let btn of editBtn){
        btn.addEventListener('click', (e) => {
            // console.log('Edit Btn Clicked!')
            post.value = e.target.parentNode.parentNode.innerText
            e.target.parentNode.parentNode.remove()
        })
    }
}

