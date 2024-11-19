function saySomething() {
    const bubble = document.getElementById("speech-bubble");
    const phrases = [
        "My princess",
        "¡You smile is beautiful!",
        "For you ❤",
        "You are special delcysi 🌟",
        "<3",
        "From Santy to you 💕",
        "Good night, my sweet angel ⭐",
        "I love you more than words can ever express. 💌",
        "My heart is happiest when I’m with you. 💞",
        "You are my favorite woman. 💜"
    ];

    // Selecciona una frase aleatoria
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    // Muestra la frase en el globo de diálogo
    bubble.textContent = randomPhrase;
    bubble.style.display = "block";

    // Oculta el globo después de 3 segundos
    setTimeout(() => {
        bubble.style.display = "none";
    }, 20000);
}
