const modal = document.getElementById('info-modal')
const btn = document.getElementById('drop')

const showModal = () => {
  console.log('clicked');
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

//Opens Info Modal
// const showModal = () => {
//     if (form.style.display = 'block') {
//     form.style.display = 'flex';
//     form.style.opacity = 1;
//     form.style.height = height + '500px';
//     form.style.width = width + '500px';
//     form.style.padding = '1rem';
//     form.style.marginBottom = '3rem';
//     } 
//     btn.style.display = 'none';
//     // btn.style.opacity = '0';
//     // btn.style.width = '0px';
//     // btn.style.height = '0px';
// };

// const hideModal = () => {
//   document.getElementById('info-modal').style.display = 'none';
//   form.style.display = 'block';
//   form.style.opacity = '0';
//   form.style.width = '0px';
//   form.style.height = '0px';
//   form.style.padding = '0';
//   form.style.marginBottom = '0';

//   btn.style.display = 'block';
// }

btn.addEventListener('click', showModal);