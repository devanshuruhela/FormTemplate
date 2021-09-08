const form = document.getElementById('form');
const pass = document.getElementById('password');
const confirmpass = document.getElementById('confirmpass');

const messagecontainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isvalid = false;
let passmatch = false;
function validateform()
{
  isvalid = form.checkValidity();
  if(!isvalid){
  message.textContent = 'Please enter all fields correctly!';
  message.style.color = 'red';
  messagecontainer.style.borderColor = 'red';
return;}

  //passmatch
  if(pass.value === confirmpass.value)
  {
     passmatch = true;
     pass.style.borderColor = 'green';
     confirmpass.style.borderColor = 'green';
  }
  else{
    passmatch=false;
    message.textContent = 'Please enter same password.';
    message.style.color = 'red';
    messagecontainer.style.borderColor = 'red';
    pass.style.borderColor = 'red';
    confirmpass.style.borderColor = 'red';
    return;
  }

  if(isvalid && passmatch)
  {
    message.textContent = 'Successfully Registered';
    message.style.color = 'green';
    messagecontainer.style.borderColor = 'green';

  }
}

function getformdata(e)
{
  e.preventDefault();
  validateform();
}

//Event listener
form.addEventListener('submit' , getformdata);