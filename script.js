let store;

document.addEventListener('keydown', (e) => {
    store = (e.key == " ") ? "space" : e.key;
    document.getElementById(store).style.backgroundColor = 'red';
    let sound = new Audio(`music/${store}.mp3`);
    console.log(sound);
    sound.play().catch(()=>{});
    setTimeout(() => {
        document.getElementById(store).style.backgroundColor = 'white';
    }, 500);
});

