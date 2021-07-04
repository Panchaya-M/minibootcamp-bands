import bandCollection from './bands.json'

import './style.scss'

document.addEventListener('DOMContentLoaded', function(){
    const cards = document.getElementById('cards')
    const items = bandCollection.data
    
    console.log(items)

    items.forEach(item => {
        let cardDOM = buildCardDOM(item)
        
        console.log(cardDOM)
        
        cards.insertAdjacentHTML('beforeend', cardDOM)

    })
})

function buildCardDOM(item) {
    let photos = bandCollection.image_base_url

    return (
        `<div class="card">
            <a href="" class="item-image">
                <img src="${photos.replace(`xxxARTIST-IDxxx`, `${item.art_id}`)}" alt="#" />
            </a>
            <div class="item-info">
                <div class="item-title">${item.album_title}</div>
                <div class="item-artist">${item.artist_title}</div>
                <div class="item-genre">${item.genre_text}</div>
            </div>
        </div>`
    )
}
