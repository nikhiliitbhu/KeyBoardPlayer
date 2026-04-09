let currentkey = null;

document.addEventListener("keydown", function(event) {
    currentkey =  (event.code === "Space") ? "space" : event.key;
    let key = document.getElementById(currentkey);
    key.style.backgroundColor = "orange";
    new Audio("sounds/" + currentkey + ".mp3").play();
    setTimeout(function() {
        key.style.backgroundColor = "pink";
    }, 200);
});