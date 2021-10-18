
const form = document.getElementById('info-modal');
const waitlistContainer = document.getElementById('waitlist-container');
const inputName = document.getElementById('inputname');
const phoneNumber = document.getElementById('phone');
const size = document.getElementById('size');
const check = document.querySelectorAll('check-button');

const height = form.clientHeight;
const width = form.clientWidth;
// const btnHeight = btn.clientHeight;
// const btnWidth = btn.clientWidth;

let customers = [];


form.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewCustomer();
 }); 

//Add new customer


/////Create Customer Object
const addNewCustomer = () => { 
  if(inputName === ''){
      alert('We need your name..')
  } else if (phoneNumber === '') {
      alert('We also req your phone number...');
  } else if (size == 0) {
      alert('How many in your party?..');
  } else {
      
    fetch('http://localhost:3000/create_customer', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `name=${inputName.value}&phone=${phoneNumber}&size=${size.value}`
    })
      .then(response => {
        if(response.status === 200) {
          console.log('passed');
        } else {
          console.log('check all fields');
        }
      })
  // inputName.value = '';
  // phoneNumber.value = '';
  // size.value = 0;

  // customers.push(customerObject)
  // hideModal();
  // }  
    return
  }
}
//Customer Render Function
// const renderCustomers = (customers) => {

//   waitlistContainer.innerHTML = '';

//   customers.forEach((item) => {
      
//       const li = document.createElement('li');
//       // Using set attribute here!! ?? not classlist.add...
//       li.setAttribute('class', 'party-waiting');
//       // li.setAttribute('data-id', item.id);

//       li.innerHTML = `
//       <p class="party-name" id="party-name">${item.name}</p>
//       <p class="party-size" id="party-size">${item.size}</p>
//       <p class="last-four" id="last-four">${item.lastFour}</p>
//       <button class="check-button">
//           <i class="far fa-check-circle remove" id="${item.id}" ></i>
//       </button>
//       `;

//       waitlistContainer.append(li);
//   })
// }


//Render customers

//

//Delete customer

// const submit = document.getElementById('submit').addEventListener('click', (e) => {
//   e.preventDefault;
//   addNewCustomer();
// });
