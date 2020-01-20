const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteButton = document.querySelector('.delete');
const search = document.querySelector('.search input');

const generateTemplate = todo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit' , evt => {
   evt.preventDefault();
   const todo = addForm.add.value.trim();

    if (todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click' ,evt =>{
    if (evt.target.classList.contains('delete')){
        evt.target.parentElement.remove();
    }
} );

const filter = (term)=>{
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup' , evt => {
    const term = search.value.trim().toLowerCase();
    filter(term);
});