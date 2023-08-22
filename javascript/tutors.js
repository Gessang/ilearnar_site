AOS.init();
// When the user scrolls down 20px from the top of the document, show the buttonconst imagesContainer = document.querySelector('.tutor-images'),
const imagesContainer = document.querySelector('.images');
const first = document.querySelector('.first');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const last = document.querySelector('.last');

let images = [
  {
    url: "/images/card-image2.jpeg",
    name: "Daniel Umoh",
    subect: "area of specialization",
    bio: "A friendly teacher with excellence teaching styles."
  },
  {
    url: "/images/card-image3.jpeg",
    name: "Queen Usoro",
    subect: "area of specialization",
    bio: "A friendly teacher with excellence teaching styles."
  },
  {
    url: "/images/card-image2.jpeg",
    name: "Daniel Umoh",
    subect: "area of specialization",
    bio: "A friendly teacher with excellence teaching styles."
  },
  {
    url: "/images/card-image3.jpeg",
    name: "Walter Solomon",
    subect: "area of specialization",
    bio: "A friendly teacher with excellence teaching styles."
  },
  {
    url: "/images/card-image3.jpeg",
    name: "Mary Johnson",
    subect: "area of specialization",
    bio: "Mary is a certified English teacher with a specialization in writing."
  },
  {
    url: "/images/card-image2.jpeg",
    name: "Brenda Chioma",
    subect: "area of specialization",
    bio: "She has helped hundreds of students improve their writing skills."
  },{
    url: "/images/card-image3.jpeg",
    name: "Orji Tunde",
    subect: "area of specialization",
    bio: "She has helped hundreds of students improve their writing skills."
  },
  {
    url: "/images/card-image2.jpeg",
    name: "Godwin John",
    subect: "area of specialization",
    bio: "A friendly teacher with excellence teaching styles."
  },
  // Add more objects for each person here
];

let index = 0;
let divs = [];

for(let i = 0; i < images.length; i++){
  let div = document.createElement('div');
  div.innerHTML = `
<img src="${images[i].url}">
<h3>${images[i].name}</h3>
<span>${images[i].subect}</span>
<p>${images[i].bio}</p>
  `;
  divs.push(div);
}
imagesContainer.innerHTML = "";
for (let i = 0; i <= index + 5; i++){
  if (i >= divs.length) {
    break;
  }
  imagesContainer.appendChild(divs[i]);
}
next.addEventListener('click',function() {
  if(index == divs.length - 6) {
    index = 0;
  } else {
    index = index + 6;
  }
  showDivs();
});

prev.addEventListener('click', function(){
  if(index == 0) {
    index = divs.length - 6;
  } else {
    index = index - 6;
  }
  showDivs();
});

first.addEventListener('click',function() {
  index = 0;
  showDivs();
});

last.addEventListener('click', function() {
  index = divs.length - 6;
  showDivs();
});

function showDivs(){
  imagesContainer.innerHTML = "";
  for(let i = index; i <= index + 5; i++) {
    if (i >= divs.length) {
      break;
    }
    imagesContainer.appendChild(divs[i]);
  }
}

//TUTORS REGISTRATION FORM

// HIDE FORM AND SHOW ON CLICKING 'APPLY AS A TUTOR'
const applyButton = document.getElementById('applyButton');
const applyForm = document.getElementById('applyForm');
const submitButton = document.getElementById('submitButton');
const editButton = document.getElementById('editButton');

applyButton.addEventListener('click', () => {
    applyForm.classList.toggle('active');
});

// TUTORS REGISTRATION FORM
const form = document.querySelector('#applyForm');
const scriptUrl = '<INSERT_SCRIPT_URL_HERE>';

// Flag to track if the form is currently being reviewed
let isReviewing = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isReviewing) {
        // Submit the form when reviewing is enabled
        const formData = new FormData(form);

        fetch(scriptUrl, {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                console.log('Form submitted successfully', response);
                // TODO: show success message to user
            })
            .catch((error) => {
                console.error('Error submitting form', error);
                // TODO: show error message to user
            });
    } else {
        // Display review section for the first time
        isReviewing = true;

        // Review the form data before submitting
        const name = form.nextElementSibling.name.value;
        const email = form.elements.email.value;

        // Populate review section with the form data
        document.getElementById('reviewName').textContent = name;
        document.getElementById('reviewEmail').textContent = email;
        // Add more review fields population and display the review section

        // Hide the form fields and display the review section
        applyForm.style.display = 'none';
        document.getElementById('reviewSection').style.display = 'block';

        // Update the submit button text
        submitButton.textContent = 'Submit';
    }
});

editButton.addEventListener('click', () => {
    // Show the form again and hide the review section
    applyForm.style.display = 'block';
    document.getElementById('reviewSection').style.display = 'none';
    isReviewing = false; // Reset the reviewing flag
    submitButton.textContent = 'Review'; // Update the submit button text
});



