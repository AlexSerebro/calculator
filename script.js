function insert(num) {
    document.form.textwiev.value = document.form.textwiev.value + num;
}

function clean() {
    document.form.textwiev.value = '';
}

function back() {
    var exp = document.form.textwiev.value;
    document.form.textwiev.value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.form.textwiev.value;
    if (exp) {
        document.form.textwiev.value = eval(exp)
    }
}