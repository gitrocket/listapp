const inputContainer = document.querySelector('.input-container');
const listItems = document.querySelector('.list-items')



inputContainer.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);


function addItem(e) {
    e.preventDefault()

    // capture input
    var newItem = document.querySelector("input[type=text]").value
    // create list elment
    var listEl = document.createElement('li');
    // add class to list element
    listEl.classList.add('item');
    // add text to list element
    listEl.textContent = newItem;
    if(listEl.textContent === "") {
        alert("enter a list item")
        return
    }
    // append list element to list items
    listItems.appendChild(listEl);


    // create button element
    var removeBtn = document.createElement('button');
    // add class to remove button
    removeBtn.classList.add('remove-btn');
    // create text for button
    removeBtnText = document.createTextNode('x');
    // add text to button
    removeBtn.appendChild(removeBtnText);
    // add remove button to list element
    listEl.appendChild(removeBtn);
    
}

function removeItem(e) {
    if(e.target.classList.contains('remove-btn')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            listItems.removeChild(li)
        }
    }
}