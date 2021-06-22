console.log("WARSZTAT - walidacja formularza zapisu do Newsletter'a");

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChbx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors')

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {    // funkcja trim() ucina biale znaki z lewej i prawej strony stringa

        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imie i nazwisko';

        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '') {

        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres e-mail';

        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes('@')) {

        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierac @';

        errors.appendChild(liError);
    }

    if (!agree1.checked) {

        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziles zgody 1';

        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
}


const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate);
allAgreeChbx.addEventListener('change', allAgree);