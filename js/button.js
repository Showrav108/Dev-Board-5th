document.getElementById('color-btn').addEventListener('click', function(){
    const colors = ['red', 'blue', 'pink', 'purple', 'green'];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];

    document.body.style.backgroundColor = randomColor;
});