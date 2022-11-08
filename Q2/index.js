const button = document.querySelector("#button")
const resultSpan = document.querySelector("#result")

button.addEventListener("click", (e) => mostrarconsole(e));

function mostrarconsole(e) {

    const text = document.querySelector("#text").value

    try {
        const obj = JSON.parse(text)
        resultSpan.innerHTML = `o ${obj} é possivel de converter`
    } catch (error) {
        resultSpan.innerHTML = "erro nao foi possivel converter o texto"
    }

}