const btn = document.getElementById('drop');
const form = document.getElementById('info-modal');
const waitlistContainer = document.getElementById('waitlist-container');
const inputName = document.getElementById('inputname');
const phoneNumber = document.getElementById('phone');
const size = document.getElementById('size');
const check = document.querySelectorAll('check-button');

// const mia = docuemnt.;

const height = form.clientHeight;
const width = form.clientWidth;
// const btnHeight = btn.clientHeight;
// const btnWidth = btn.clientWidth;

let customers = [];

//Opens Info Modal
const showModal = () => {
    if (form.style.display = 'block') {
    form.style.display = 'flex';
    form.style.opacity = 1;
    form.style.height = height + '500px';
    form.style.width = width + '500px';
    form.style.padding = '1rem';
    form.style.marginBottom = '3rem';
    } 
    btn.style.display = 'none';
    // btn.style.opacity = '0';
    // btn.style.width = '0px';
    // btn.style.height = '0px';
};

const hideModal = () => {
    document.getElementById('info-modal').style.display = 'none';
    form.style.display = 'block';
    form.style.opacity = '0';
    form.style.width = '0px';
    form.style.height = '0px';
    form.style.padding = '0';
    form.style.marginBottom = '0';

    btn.style.display = 'block';
}

// Submit Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewCustomer();
    
});

/////Create Customer Object
const addNewCustomer = (e) => {

    const customerName = inputName.value;
    const customerLastFour = phoneNumber.value.slice(6, 10);
    const partySize = size.value;
    if(customerName === ''){
        alert('We need your name..')
    } else if (customerLastFour === '') {
        alert('We also req your phone number...');
    } else if (partySize == 0) {
        alert('How many in your party?..');
    } else {
        
        const customerObject = {
            id: customers.length+1,
            name: customerName,
            lastFour: customerLastFour,
            size: partySize
        };

    customers.push(customerObject);
    addToLocalStorage(customers);

    inputName.value = '';
    phoneNumber.value = '';
    size.value = 0;

    hideModal();
    }  
}


//Customer Render Function
const renderCustomers = (customers) => {

    waitlistContainer.innerHTML = '';

    customers.forEach((item) => {
        
        const li = document.createElement('li');
        // Using set attribute here!! ?? not classlist.add...
        li.setAttribute('class', 'party-waiting');
        // li.setAttribute('data-id', item.id);

        li.innerHTML = `
        <p class="party-name" id="party-name">${item.name}</p>
        <p class="party-size" id="party-size">${item.size}</p>
        <p class="last-four" id="last-four">${item.lastFour}</p>
        <button class="check-button">
            <i class="far fa-check-circle remove" id="${item.id}" ></i>
        </button>
        `;

        waitlistContainer.append(li);
    })
}

//Add To Local Storage
const addToLocalStorage = (customers) => {

    localStorage.setItem('customers', JSON.stringify(customers));
    renderCustomers(customers);
}

// Get From Local Storage
const getFromLocalStorage = () => {
    const referenceCustomers = localStorage.getItem('customers');

    if(referenceCustomers) {
        customers = JSON.parse(referenceCustomers);
        renderCustomers(customers);
    }
}

getFromLocalStorage();

// Delete Customer 

const deleteCustomer = (id) => {
    console.log('delete function');
    const selectedIndex = customers.findIndex((item) => item.id == id);
    customers.splice(selectedIndex, 1);
    // customers = customers.filter((item) => {
    //     return item.id !== id;
    // })  THIS FUNCTION DID NOT WORK 
    addToLocalStorage(customers);
}


// Event listeners??
// waitlistContainer.addEventListener('click', (e) => {
//     if(confirm('Is the party seated?')){
//     console.log('seated');
//     deleteCustomer(e.target.parentElement.getAttribute('data-id'));
//     console.log(e.target);
//     }else {
//     console.log('not seated');  
//     }
// });

waitlistContainer.addEventListener('click', (e) => {
    console.log(e.target.id);
       if( confirm('Is the party seated?')){
    id = e.target.id;
    deleteCustomer(id);
    console.log('deleted');
       } else {
           console.log('do noothing');
        return;
       }
})

btn.addEventListener('click', showModal);


