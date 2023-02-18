// 1) Selecionando o elmento
const relogio2 = document.querySelector('.relogio2')

// 4) Função que verifica com um ternário se o número convertido em String tem só um caracter
// Se tiver só um caracter, retorna um número com o zero na frente, se não tiver retorna um número sem o zero
// Converter os números em String de forma explícita com String()
const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

// Criando tags HTML das Horas, Minutos e Segundos
const getClockHTML = (horas, minutos, segundos) => `
    <span class="horas">${formatTimeUnit(horas)}</span><span>:</span>
    <span class="minutos">${formatTimeUnit(minutos)}</span>
    <span class="segundos">${formatTimeUnit(segundos)}</span>
    `

// 2) Atualiza as horas, minutos e segundos constantemente usando setInterval()
const atualizarRelogio = () => {

    // Armazenar um objeto de Data que representa o momento atual
    const presente = new Date()

    // Obter as Horas, Minutos e Segundos
    const horas = presente.getHours()
    const minutos = presente.getMinutes()
    const segundos = presente.getSeconds()

    // Inserindo as tags HTML das Horas, Minutos e Segundos
    relogio2.innerHTML = getClockHTML(horas, minutos, segundos)
}

// 3) A cada segundo o HTML recebe as Horas, Minutos e Segundos
setInterval(atualizarRelogio, 1000)