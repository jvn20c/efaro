barra_navegacao = document.querySelector(".menu-superior").querySelectorAll("a");

console.log(barra_navegacao)

barra_navegacao.forEach(elemento => {
    elemento.addEventListener("click", function() {
        barra_navegacao.forEach(nav=>nav.classList.remove("ativo"))

        this.classList.add("ativo");
    })
});