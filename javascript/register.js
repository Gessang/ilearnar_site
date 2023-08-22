      //READ MORE BUTTONS 3
      function myFunction4() {
        var dots4 = document.getElementById("dots4");
        var moreText4 = document.getElementById("more4");
        var btnText4 = document.getElementById("moreBtn4");
        
        if (dots4.style.display === "none") {
          dots4.style.display = "inline";
          btnText4.innerHTML = "Read more...";
          moreText4.style.display = "none";
        } else {
          dots4.style.display = "none";
          btnText4.innerHTML = "Read less";
          moreText4.style.display = "inline";
        }
      }

// Google Sheets API URL
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbzxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec';

// Function to send form data to Google Sheets
function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('registrationForm');
  const formData = new FormData(form);

  fetch(GOOGLE_SHEETS_API_URL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Registration successful!');  // Modify this to your liking
      form.reset();
    } else {
      throw new Error('Error submitting form');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Error submitting form');  // Modify this to your liking
  });
}

// Function to toggle the visibility of the registration form
function toggleFormVisibility() {
  const form = document.getElementById('registrationForm');
  const registerButton = document.getElementById('registerButton');

  if (form.style.display === 'none') {
    form.style.display = 'block';
    registerButton.innerText = 'Hide Form';
  } else {
    form.style.display = 'none';
    registerButton.innerText = 'Register';
  }
}

// Attach submit event listener to the form
const form = document.getElementById('registrationForm');
form.addEventListener('submit', submitForm);

// Attach click event listener to the register button
const registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click', toggleFormVisibility);

