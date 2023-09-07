import JustValidate from "/package.json";

const validator = new JustValidate();



validator.addField(document.querySelector('#fullName'), [
    {
        rule: 'minlength',
        value: 10,
    },
    {
        rule: 'maxlength',
        value: 40,
    }
]).addField(document.querySelector('#email'), [
    {
        rule: 'minlength',
        value: 10,
    },
    {
        rule: 'maxlength',
        value: 50,
    }
]).addField(document.querySelector('#question') [
    {
        rule: 'cols',
        value: 30,
    },
    {
        rule: 'rows',
        value: 10,
    },
    {
        rule: 'minlength',
        value: 1,
    },
    {
        rule: 'maxlength',
        value: 500,
    }
]);