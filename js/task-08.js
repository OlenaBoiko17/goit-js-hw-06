const refs = {
    form: document.querySelector('.login-form'),
    inputMail: document.querySelector('[name="email"]'),
    inputPassword: document.querySelector('[name="password"]'),
    button: document.querySelector('[type="submit"]'),

}

refs.form.addEventListener('submit', processingFormData);

function processingFormData(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if(formElements.email.value.trim().length === 0 || formElements.password.value.trim().length === 0) {
        return alerf('Заповніть поле!');

    } else {
        const formData = new FormData(event.currentTarget);
        const formDataObject = {};
        formData.forEach((value, name) => {
          formDataObject[name] = value;

        })

    }

    event.currentTarget.reset();
}