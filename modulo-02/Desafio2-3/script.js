const cards = document.querySelectorAll('.cards')
const posts = document.querySelector('.posts')
const modalOverlay = document.querySelector('.modal')
const iframe = document.querySelector('iframe')
const close = document.getElementById('close')
const max = document.getElementById('max')




// src="https://blog.rocketseat.com.br/es11-novas-features-do-javascript/" 

for (let card of cards){
    let cardId = card.id
    console.log(cardId);
    card.addEventListener('click', ()=>{
        posts.style.display = 'none'
        modalOverlay.style.display = 'flex'
        iframe.src = `https://blog.rocketseat.com.br/${cardId}-novas-features-no-javascript`

  
    })
}

close.addEventListener('click', ()=>{
    posts.style.display = 'grid'
    modalOverlay.style.display = 'none'
    iframe.src = ''
})

max.addEventListener('click', ()=>{
    iframe.classList.toggle('active')
})
