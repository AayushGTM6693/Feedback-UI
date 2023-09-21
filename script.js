const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

panel.addEventListener('click',(e)=>{
if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
e.target.parentNode.classList.add('active')
selectedRating = e.target.nextElementSibling.innerHTML

}
})
sendBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    panel.innerHTML = ` 
    <i class="fas fa-heart"></i>
    <strong> Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    <br>
    <p> We'll use your feedback to improve cookies !! 😏 </p>
    
    `
})

function removeActive(){
    ratings.forEach((rating)=>{
        rating.classList.remove('active')
    })
}