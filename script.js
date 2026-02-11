document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.getElementById('mainContainer');
    const tenorGif = document.getElementById('tenorGif');
    const music = document.getElementById('vibeMusic');
    let hasIncreased = false;

    // Mobile browsers often need the audio to be "loaded" explicitly
    music.load();

    // THE MOBILE UNLOCKER: This triggers on the very first touch of the screen
    const unlockAudio = () => {
        music.play().then(() => {
            music.pause();
            music.currentTime = 0;
        }).catch(e => console.log("Waiting for user..."));
        document.removeEventListener('touchstart', unlockAudio);
    };
    document.addEventListener('touchstart', unlockAudio);

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
        // Play music FIRST - this is the "User Gesture" mobile requires
        music.play().catch(error => console.log("Error:", error));

        document.querySelector('.button-wrapper').style.display = 'none';
        document.getElementById('footerText').style.display = 'none';
        if(noBtn) noBtn.style.display = 'none';

        tenorGif.style.display = 'block';
        tenorGif.style.width = '70%'; 
        tenorGif.style.margin = '20px auto'; 
        
        const successContent = document.createElement('div');
        successContent.innerHTML = `
            <h1 style="color: #ff4081; margin: 10px 0;">YAY! 🎉</h1>
            <img src="kissing.gif" style="width: 80%; border-radius: 15px;" alt="Celebration GIF">
        `;
        container.appendChild(successContent);
    });
});
