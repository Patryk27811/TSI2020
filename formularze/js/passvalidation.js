function checkPass(form) {
    pass = form.pass.value;
    pass2 = form.pass2.value;

    if (password != pass2) {
        alert("\nWprowadzona hasła różnią się od siebie!!!");
        return false;
    }


}