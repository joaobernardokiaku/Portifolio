
var texto = "Chamo-me João Bernardo Kiaku, sou estudante do ensino médio no Complexo Escolar Politécnico Privado John Locke, cursando a 13ª classe no escolhido curso de Informática. Sou Desenvolvidor Web Front-End júnior, com uma mínima capacidade de actuar no Back-End. Portanto, as minhas habilidades predominam em linguagens e tecnologias tais como: HTML, CSS, Javascript, Bootstrap, JQuery, PHP e MySQL. O meu desafio como objectivo geral é, estudar a fim de me tornar um desenvolvedor web Full-Stack, e actuar no mercado de programação como um desenvolvedor Freelancer... Obrigado!";

document.getElementById('transcreverTexto').addEventListener('click', ()=>{
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; //Idioma
    utterance.pitch = 0.8; //Tom da voz
    utterance.rate = 1.2; //Velocidade
    utterance.volume = 2; //Volume
    speechSynthesis.speak(utterance);
});
