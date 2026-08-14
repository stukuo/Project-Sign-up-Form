const myform = document.getElementById('form');

myform.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(event.target)
    const password = data.get('password')
    const confirmPassword = data.get('confirm-password')
    
    if (password !== confirmPassword){
        myform.querySelector('#password').classList.add('is-invalid')
        myform.querySelector('#confirm-password').classList.add('is-invalid')
    } else {
        myform.querySelector('#password').classList.remove('is-invalid')
        myform.querySelector('#confirm-password').classList.remove('is-invalid')

        alert('Sign-up Succesful!')
    }

});
