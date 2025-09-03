const TopBtn = document.getElementById('Top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { 
    TopBtn.style.display = 'block';
    } else {
    TopBtn.style.display = 'none';
    }
});

TopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});