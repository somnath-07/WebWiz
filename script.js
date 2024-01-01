const colors = ["blue", "green", "yellow"];
let currentColor = 0;


function changeTheme() {
    const randomColor = colors[currentColor];
    document.body.style.backgroundColor = randomColor;
    alert('Changed theme successfully');
    currentColor++;

    if (currentColor==3) {
        currentColor = 0;
    }
}