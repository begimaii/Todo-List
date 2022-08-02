const newTodoInput = document.querySelector('#new-todo-input');
const addTodoBtn = document.querySelector('#add-new-todo-btn');
const ulTodoList = document.querySelector('#todo-list')



const addTodoFn = function(){
    const inputValue = newTodoInput.value;
    // console.log(inputValue);

    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'single-todo');
    //input checkbox 
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class','single-todo-check');

    checkBox.addEventListener('click',(e) => {
        console.log('todo checked', e.target.checked);
        const checkState = e.target.checked;

        checkBox.nextElementSibling.classList.toggle('cross-line');
    });
// paragraph
    const todoText = document.createElement('p');
    todoText.setAttribute('class','single-todo-text');
    todoText.innerText = inputValue;   

// edit button

    const editBtn = document.createElement('button');
    editBtn.innerText = 'edit';
    editBtn.setAttribute('class',
    'edit-btn');
    editBtn.addEventListener('click', () => {
    console.log('edit btn clicked');
    const editedInput =document.createElement('input');
    editedInput.setAttribute('class', 'edit-single-todo-text');
    editedInput.setAttribute('type', 'text');
    editedInput.value = inputValue;
    // editedInput.classList.remove(edit-single-input-text)
   

    editBtn.style.display = 'none';
    todoText.style.display = 'none';
    deleteBtn.style.display = 'none';
    checkBox.style.display = 'none';

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.setAttribute('class',
    'done-btn');
    doneBtn.addEventListener('click', () => {
        console.log('Done button clicked')
        editedInput.focus();
        todoText.style.display = 'inline'
        const newEditedText = editedInput.value
        todoText.innerText = newEditedText; 
       
       
       doneBtn.style.display = 'none';
       editedInput.style.display = 'none';
       checkBox.style.display = 'inline';
       editBtn.style.display = 'inline';
       deleteBtn.style.display = 'inline';

    })
  
    listItem.appendChild(editedInput)    
    listItem.appendChild(doneBtn)
    listItem.appendChild(doneBtn)
   
    })

    

// delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('class',
    'delete-btn');
    deleteBtn.addEventListener('click', () => {
    console.log('delete btn clicked');
    deleteBtn.parentElement.remove();
});
    

    listItem.appendChild(checkBox);
    listItem.appendChild(todoText);
    listItem.appendChild(editBtn); 
    listItem.appendChild(deleteBtn);
    
  


    if(inputValue !== ''){
    ulTodoList.appendChild(listItem);
    
} 
    // reset input value
    newTodoInput.value = '';



 };
addTodoBtn.addEventListener('click',addTodoFn);