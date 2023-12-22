

function addNewItem() {
    const IdInput = document.getElementById('Id').value;
    const photoInput = document.getElementById('photo').value;
    const titleInput = document.getElementById('title').value;
    const releaseYearInput = document.getElementById('releaseYear').value;
    const nacionalityInput = document.getElementById('nacionality').value;
    const genreInput = document.getElementById('genre').value;
    

    const newItem = {
        itemId: IdInput,
        itemPhoto: photoInput,
        itemTitle: titleInput,
        itemReleaseYear: releaseYearInput,
        itemNacionality: nacionalityInput,
        itemGenre: genreInput,
        
    }
    dataBase.push(newItem);
    console.log (newItem);


};


localStorage.setItem('newItem', JSON.stringify('newItem'));
JSON.parse(localStorage.getItem('newItem'));