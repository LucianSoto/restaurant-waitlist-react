// select everything
// select the todo-form
const form = document.getElementById('info-modal');
// select the input box
const inputName = document.getElementById('inputname');
// select the <ul> with class="todo-items"
const waitlistContainer = document.getElementById('waitlist-container');

// array which stores every todos
let customers = [];

console.log(inputName);

// add an eventListener on form, and listen for submit event
form.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addNewCustomer(inputName.value); // call addTodo function with input box current value
});

// function to add todo
function addNewCustomer(item) {
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, name, and completed properties
    const customer = {
      id: Date.now(),
      name: item,
      completed: false
    };

    // then add it to todos array
    customers.push(customer);
    addToLocalStorage(customers); // then store it in localStorage

    // finally clear the input box value
    inputName.value = '';
  }
}

// function to render given todos to screen
function renderCustomers(customers) {
  // clear everything inside <ul> with class=todo-items
  waitlistContainer.innerHTML = '';

  // run through each item inside todos
  customers.forEach(function(item) {
    // check if the item is completed
    const checked = item.completed ? 'checked': null;

    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'party-waiting');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */
    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    // finally add the <li> to the <ul>
    waitlistContainer.append(li);
  });

}

// function to add todos to local storage
function addToLocalStorage(customers) {
  // conver the array to string then store it.
  localStorage.setItem('customers', JSON.stringify(customers));
  // render them to screen
  renderCustomers(customers);
}