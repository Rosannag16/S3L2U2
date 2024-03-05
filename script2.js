

function contatore() {
    var valore = sessionStorage.getItem("contatore");
    if (!valore) {
        valore = 0;
    }
    valore++;
    sessionStorage.setItem("contatore", valore);
    document.getElementById("contatore").innerText = valore;
}
setInterval(contatore, 1000);

contatore();
