import Notiflix, { Block } from 'notiflix';
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_iHte4Ifc1eYMaA1v3RjGcO3u6BwcwuUZG8rC1iHwV0PZXYcg8WD6lIpyyl8p9QcL";

let select = document.querySelector(".breed-select");
let loader = document.querySelector(".loader");
let error = document.querySelector(".error");
let catInfo = document.querySelector(".cat-info");
let initialMessage = document.querySelector(".Breed-message");
loader.classList.remove("hidden");
initialMessage.classList.remove("hidden");

function fetchBreeds() {
    fetch("https://api.thecatapi.com/v1/breeds").then((response) => {
        if (!response.ok) {
            Notiflix.Notify.warning("Oops! Something went wrong! Try reloading the page!");
        }
        loader.classList.add("hidden");
        return response.json();
    })
        .then(data => {
            data.map(keys => {
                let namesCats = keys.name;
                const option = document.createElement('option');
                option.value = keys.reference_image_id;
                option.text = namesCats;
                select.appendChild(option);
            });
            
            return data;
        }).catch(err => {
            console.log('Oops! Something went wrong! Try reloading the page!');
        });
}

const dataAPI = fetchBreeds();

select.addEventListener("change", (e) => {
    fetchBreeds()
    loader.classList.remove("hidden");
    fetchImages(e.target.value).then(response => {
    return response.json()
    }).then(data => {
        initialMessage.classList.add("hidden");
        catInfo.innerHTML = `
       <img class="cat-info__cat-image lazyload blur-up" src="${data.url}" data-src="${data.url}" alt="" width="300px" height="300px">
       <div class="cat-description">
       <h2 class="cat-description__cat-breed">${data.breeds[0].name}</h2>
       <p class="cat-description__cat-temperament">${data.breeds[0].description}</p>
       <h3 class="cat-description__cat-temperament">Temperament</h3>
       <p class="cat-description__cat-temperament">${data.breeds[0].temperament}</p>
       </div>`
    }).catch(err => {
        error.classList.remove("hidden");
    });
});

function fetchImages(id) {
    return fetch(`https://api.thecatapi.com/v1/images/${id}`);
}