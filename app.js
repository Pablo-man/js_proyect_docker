let buttonHello= document.createElement('button')

buttonHello.innerText= "Click me"

buttonHello.addEventListener('click', () => alert("hello world with javascript :)"))

document.body.append(buttonHello)