const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.getElementById('mainContainer');
const tenorGif = document.getElementById('tenorGif');
let hasIncreased = false;

const handleNoInteraction = () => {
    const padding = 60; 
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = "1000";

    if (!hasIncreased) {
        yesBtn.style.fontSize = "55px"; 
        yesBtn.style.padding = "30px 60px";
        hasIncreased = true;
    }
};

noBtn.addEventListener('mouseover', handleNoInteraction);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    handleNoInteraction();
});

yesBtn.addEventListener('click', () => {
    // Hide buttons and footer
    document.querySelector('.button-wrapper').style.display = 'none';
    document.getElementById('footerText').style.display = 'none';
    if(noBtn) noBtn.style.display = 'none';

    // Show the Tenor GIF and reduce its container size
    tenorGif.style.display = 'block';
    tenorGif.style.width = '50%'; // This makes the Tenor gif smaller
    tenorGif.style.margin = '20px auto'; // Centers it
    
    // Create and add the YAY text and kissing gif
    const successContent = document.createElement('div');
    successContent.innerHTML = `
        <h1 style="color: #ff4081; margin: 10px 0;">YAY! 🎉</h1>
        <img src="kissing.gif" style="width: 80%; border-radius: 15px;" alt="Celebration GIF">
    `;
    container.appendChild(successContent);
});