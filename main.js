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
    postsArea(e.target.post.value)
    deleteBtn()
    form.reset()
})

function postsArea(comment){
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    posts.appendChild(ul)
    // ul.appendChild(li)
    // console.log(posts)
    // li.innerText = 'I love that move'
    console.log(comment)
    ul.innerHTML = `
        <li> 
        <p>${comment}</p>
        <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
        </span>
        </li>
    `
    // console.log(li.innerHTML)
}
postsArea()

// DELETE COMMENT
function deleteBtn(){
    const deleteBtn = document.getElementsByClassName('fas fa-trash-alt')
    // console.log(deleteBtn)
    for(let btn of deleteBtn){
        btn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove()
        })
    }
}
deleteBtn()

// EDIT COMMENT
function editBtn(){
    const editBtn = document.getElementsByClassName('fas fa-edit')
    // console.log(editBtn)
}
editBtn()
