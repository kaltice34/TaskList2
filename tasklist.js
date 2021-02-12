// Initialization - grab all event items
const addButton = document.querySelector('#addButton');
const clearButton = document.querySelector('#clearButton');
const txtBox = document.querySelector('#txtBox');
const list = document.querySelector('#list'); // where added items go

// add event listeners
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);



// Button Add Click
function addItem(e) {
    e.preventDefault();
    const item = document.createElement('div');
    const text = txtBox.value;
    item.setAttribute('class', 'item');
    item.innerHTML = text;

    if (document.body.offsetWidth > 150) {
        // create delete click item
    const delete_item = document.createElement('div');
    console.log(delete_item);
    delete_item.setAttribute('class', 'deleteItem');
    delete_item.innerHTML = 'X';
    console.log(delete_item);

    // add event listener to delete_Item
    delete_item.addEventListener('click', deleteAddedItem);

    // add delete item to created item
    item.appendChild(delete_item);
    console.log(item);
    }
    
    /* 
        if screen width is less than 150px
        add delete event listener to actual
        task text for deleting rather than
        adding an X to the end which may cause
        difficulty clicking and screws up text
        formatting
    */
   if (document.body.offsetWidth < 150) {
    item.addEventListener('click', deleteAddedItem);
   }
    

    // add created item to task list on page
    list.appendChild(item);

    // clear the text box
    txtBox.value = '';
}

// Button Clear Click
function clearList(e) {
    list.innerHTML = '';
}

// Task X Click
function deleteAddedItem(e) {
    if (document.body.offsetWidth < 150) {
        e.target.remove();
    }
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
}

// responsive


//     txtBox.addEventListener('keypress', preventInput);
//     txtBox.addEventListener('keydown', preventInput);
//     txtBox.addEventListener('change', preventInput);
    

// function preventInput (e) {
//     console.log(e.type);
//     console.log('FIRED');
//         if (e.keycode !== 8 || e.keycode !== 46){
//             console.log('FIRED for NOT Del or Bcksp');
//             if(document.body.offsetWidth < 335) {
//                 console.log('FIRED for width < 335. Length: ' + txtBox.value.length);
//                 if (txtBox.value.length > 20) {
//                     console.log('FIRED for length > 20');
//                     txtBox.value = txtBox.value.slice(0, 20);
//                     console.log(txtBox.value.length);
//                 }
//             }
                
//         } 
//     }
