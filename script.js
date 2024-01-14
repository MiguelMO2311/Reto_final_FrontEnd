// const newItemContainer = document.getElementById('newItemContainer');
// function addNewItem() {
//     const IdInput = document.getElementById('Id').value;
//     const photoInput = document.getElementById('photo').value;
//     const titleInput = document.getElementById('title').value;
//     const releaseYearInput = document.getElementById('releaseYear').value;
//     const nacionalityInput = document.getElementById('nacionality').value;
//     const genreInput = document.getElementById('genre').value;
    

//     const newItem = {
//         itemId: IdInput,
//         itemPhoto: photoInput,
//         itemTitle: titleInput,
//         itemReleaseYear: releaseYearInput,
//         itemNacionality: nacionalityInput,
//         itemGenre: genreInput,
//         }

//         const newItemCard = document.createElement('ul');
//         newItemCard.innerHTML =  `<div class="card" style="width: 14rem; margin:2%; padding:2%; border:none;">
//         <img src="${newItem.itemPhoto}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${newItem.itemTitle}</h5>
//           <p class="card-text">${newItem.itemNacionality}</p>
//           <p class="card-text">${newItem.itemReleaseYear}</p>
//           <p class="card-text">${newItem.itemGenre}</p>
        
//         </div>
//       </div>`;
//         newItemContainer.appendChild(newItemCard);
//         container.innerText = newItemCard;
//     }

// localStorage.setItem('dataBase', JSON.stringify ('dataBaseUser'));
// JSON.parse(localStorage.getItem('dataBase'));