/// *************************************************** ///
/// *************** AUXILIO PARA DESENVOLVER*************** ///
/// *** GITHUB https://github.com/ErleyMartins ******** ///
/// *************************************************** ///

const _validationField = {
    validationInput: (input, min, max, nameField) => {
        const id = input.getAttribute('id');
        const div = document.querySelector(`div#${id}`);
        
        if (input.value === '' || input.value == null) {
            input.classList.add('is-invalid');
            div.innerHTML = `O campo ${nameField} e obrigatorio.`;
            return false;
        }
        else if (input.value.length < min) {
            input.classList.add('is-invalid');
            div.innerHTML = `O campo ${nameField} deve ter no minimo ${min} caracteres.`;
            return false;
        }
        else if (input.value.length > max) {
            input.classList.add('is-invalid');
            div.innerHTML = `O campo ${nameField} deve ter no maximo ${max} caracteres.`;
            return false;
        }

        div.innerHTML = '';
        input.classList.remove('is-invalid');
        
        return true;
    },
    validationSelect: (select, defaultValue, nameField) => {
        const id = select.getAttribute('id');
        const div = document.querySelector(`div#${id}`);

        if (select.options[select.selectedIndex].value == defaultValue || select.options[select.selectedIndex].value == null) {
            select.classList.add('is-invalid');
            div.innerHTML = `Voce deve selecionar uma opção do campo ${nameField}`;
            return false;
        }

        div.innerHTML = '';
        select.classList.remove('is-invalid');
        
        return true;
    }
}

const _header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const _handlerResponse = {
    json: (response) => {
        if (!response.ok) throw new Error (response.statusText);
        return response.json();
    },
    text: (response) => {
        if (!response.ok) throw new Error (response.statusText);
        return response.text();
    } 
}
