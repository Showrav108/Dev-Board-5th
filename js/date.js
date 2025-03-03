document.addEventListener('DOMContentLoaded',function(){
    const today = new Date();
    const options = {weekday:'short', month:'short', day:'numeric', year: 'numeric'};

    document.getElementById('date').textContent = today.toLocaleDateString('en-us',options);
});