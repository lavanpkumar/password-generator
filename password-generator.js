let length = 15

document.getElementById('length').value = length

const checkboxUpper = document.getElementById('uppercase')
const checkboxLower = document.getElementById('lowercase')
const checkboxNum = document.getElementById('numbers')
const checkboxSymbol = document.getElementById('symbols')

checkboxUpper.checked = true
checkboxLower.checked = true
checkboxNum.checked = true
checkboxSymbol.checked = true


const renderPassword = function () {
    console.log(length)
    let password = ''
    let bigString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-+'

    const checkBoxChange = function () {
        if (checkboxUpper.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    
        if (checkboxLower.checked) {
            bigString = 'abcdefghijklmnopqrstuvwxyz'
        }
    
        if (checkboxNum.checked) {
            bigString = '0123456789'
        }
    
        if (checkboxSymbol.checked) {
            bigString = '!@#$%^&*-+'
        }

        if (checkboxUpper.checked && checkboxLower.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        }

        if (checkboxUpper.checked && checkboxNum.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        }

        if (checkboxUpper.checked && checkboxSymbol.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-+'
        }

        if (checkboxLower.checked && checkboxNum.checked) {
            bigString = 'abcdefghijklmnopqrstuvwxyz0123456789'
        }

        if (checkboxLower.checked && checkboxSymbol.checked) {
            bigString = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-+'
        }

        if (checkboxNum.checked && checkboxSymbol.checked) {
            bigString = '0123456789!@#$%^&*-+'
        }

        if (checkboxUpper.checked && checkboxLower.checked && checkboxNum.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        }

        if (checkboxUpper.checked && checkboxLower.checked && checkboxSymbol.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-+'
        }

        if (checkboxUpper.checked && checkboxNum.checked && checkboxSymbol.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-+'
        }

        if (checkboxLower.checked && checkboxNum.checked && checkboxSymbol.checked) {
            bigString = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-+'
        }

        if (checkboxLower.checked && checkboxNum.checked && checkboxSymbol.checked && checkboxUpper.checked) {
            bigString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-+'
        }

    }
    
    
    checkBoxChange()

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * bigString.length)
        password += bigString.charAt(char)
    }

    document.getElementById('password-input').value = password
}

/*const alwaysChecked = function (event) {
    const checkboxes = document.querySelectorAll('.option-checkboxes');
    let checkedCount = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (checkedCount === 0) {
        event.target.checked = true;
    }

    renderPassword();
}; */

document.querySelectorAll('.option-checkboxes').forEach(checkbox => { 
    checkbox.addEventListener('change', function(event) { 
        const checkboxes = document.querySelectorAll('.option-checkboxes') 
        const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked) 
        if (checkedCheckboxes.length === 0) { 
            event.target.checked = true 
        } 
        renderPassword()
    })
})



document.getElementById('copy-button').addEventListener('click', function () {
    const copyText = document.getElementById('password-input')
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
})

document.getElementById('refresh-button').addEventListener('click', function () {
    renderPassword()
})

document.getElementById('length').addEventListener('input', function () {
    length = this.value
    renderPassword()
})

document.getElementById('uppercase').addEventListener('change', function () {
    renderPassword()
})

document.getElementById('lowercase').addEventListener('change', function () {
    renderPassword()
})

document.getElementById('numbers').addEventListener('change', function () {
    renderPassword()
})

document.getElementById('symbols').addEventListener('change', function () {
    renderPassword()
})

checkboxUpper.addEventListener('change', renderPassword());
checkboxLower.addEventListener('change', renderPassword());
checkboxNum.addEventListener('change', renderPassword());
checkboxSymbol.addEventListener('change', renderPassword());


renderPassword()