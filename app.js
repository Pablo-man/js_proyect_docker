let container= document.getElementById("buttonHello")
let buttonHello= document.createElement('button')

buttonHello.innerText= "Click me"

buttonHello.addEventListener('click', () => alert("hello world with javascript :)"))

container.appendChild(buttonHello)