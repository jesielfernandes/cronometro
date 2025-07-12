let timer; // variável para armazenar o timer
let seconds = 0; // variável para contar os segundos
let milliseconds = 0; // variável para contar os milissegundos

let toggleRail = document.getElementById('theme-toggleRail'); // obtém o elemento de troca do tema
let isDarkMode = false; // variável para controlar o modo escuro
let body = document.getElementById('background'); // obtém o elemento body

toggleRail.addEventListener('click', () =>{
    isDarkMode = !isDarkMode; // alterna o estado do modo escuro
    toggleRail.classList.toggle('dark', isDarkMode); // adiciona ou remove a classe de modo escuro no botão
    body.classList.toggle('dark', isDarkMode); // adiciona ou remove a classe de modo escuro no body
});

function StartTimer() {
    if (!timer) { // verifica se o timer ainda não está rodando
        timer = setInterval(() => {
            milliseconds += 100; // incrementa os milissegundos a cada 100ms
            if (milliseconds >= 1000) { // se milissegundos atingirem 1000, incrementa os segundos
                seconds++; // incrementa os segundos
                milliseconds = 0; // reseta milissegundos
            }
            updateTimerDisplay(); // atualiza a exibição do timer
        }, 100); // a cada 100 milissegundos
    }
}

function StopTimer() {
    clearInterval(timer); // para o timer
    timer = null; // reseta a variável do timer
}

function ResetTimer() {
    StopTimer(); // para o timer
    seconds = 0; // reseta os segundos
    milliseconds = 0; // reseta os milissegundos
    updateTimerDisplay(); // atualiza a exibição do timer
}

function updateTimerDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0'); // calcula horas
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'); // calcula minutos
    const secs = String(seconds % 60).padStart(2, '0'); // calcula segundos
    const ms = String(milliseconds / 10).padStart(2, '0'); // calcula milissegundos (dividido por 10 para ter 2 dígitos)
    
    document.getElementById('timer').textContent = `${hours}:${minutes}:${secs}:${ms}`; // atualiza o texto do timer
    document.getElementById('timer').style.color = (seconds % 2 === 0) ? 'rgb(6 191 230 / 74%)' : 'rgb(6 200 230 / 100%)'; // alterna a cor do texto
}