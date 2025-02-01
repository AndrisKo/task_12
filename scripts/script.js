window.onload = function () {
    let fullName = document.getElementById('fullName');
    fullName.onkeydown = (event) => {
        if (event.key >= '0' && event.key <= '9') {
            event.preventDefault();
        }
    }

    let username = document.getElementById('username');
    username.onkeydown = (event) => {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    }

    let checkbox = document.getElementById('checkbox-input');
    checkbox.onchange = (event) => {
        console.log(event.target.checked ? "Согласен" : "Не согласен");
    }

    let mailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let repeatPasswordInput = document.getElementById('repeatPassword');
    let btn = document.getElementById('btn');
    let successModal = document.getElementById('successModal');
    let okButton = document.getElementById('okButton');
    let checkboxInput = document.getElementById('checkbox-input');
    let signupForm = document.getElementById('signupForm');

    signupForm.onsubmit = function(event) {
        event.preventDefault(); 

        if (!fullName.value) {
            alert("Заполните поле Full Name");
            return;
        }
        if (!username.value) {
            alert("Заполните поле Your username");
            return;
        }

        // if (!fullName.value || !username.value || !mailInput.value || !passwordInput.value || !repeatPasswordInput.value) {
        //     alert("Заполните все поля");
        //     return;
        // }
        if (!mailInput.value) {
            alert("Заполните поле E-mail");
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(mailInput.value)) {
            alert("Введите корректный адрес электронной почты");
            return;
        }
        if (passwordInput.value.length < 8) {
            alert("Пароль должен содержать не менее 8 символов");
            return;
        }
        if (passwordInput.value !== repeatPasswordInput.value) {
            alert("Пароли не совпадают");
            return;
        }
        if (!checkboxInput.checked) {
            alert("Необходимо согласиться с условиями обслуживания");
            return;
        }

        successModal.style.display = 'block'; 
    };

    okButton.onclick = function () {
        successModal.style.display = 'none';
        switchToLoginPage();
    };

    let loginLink = document.getElementById('loginLink');
    loginLink.onclick = function(event) {
        event.preventDefault();
        switchToLoginPage();
    };

    function switchToLoginPage() {
        document.querySelector('h1').textContent = "Log in to the system";

        let elementsToRemove = [fullName.parentNode, mailInput.parentNode, repeatPasswordInput.parentNode, checkboxInput.parentNode, loginLink];
        elementsToRemove.forEach(element => element.remove());

        btn.textContent = "Sign In";

        okButton.onclick = function() { 
            successModal.style.display = 'none'; 
        };

        signupForm.onsubmit = function(event) { 
            event.preventDefault(); 
        };

        btn.onclick = function() {
            if (!username.value) {
                alert("Заполните поле Your username");
                return;
            }
            if (!passwordInput.value) {
                alert("Заполните поле Password");
                return;
            }
            if (passwordInput.value.length < 8) {
                alert("Пароль должен содержать не менее 8 символов");
                return;
            }
            alert("Добро пожаловать, " + username.value + "!");
        }
    }
    
console.log("Сообщение из ветки dev-2");



}
console.log('Сообщение от первого разработчика');
