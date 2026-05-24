// Loading Screen
window.onload = function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingScreen.style.transition = 'opacity 0.6s ease';
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.transition = 'opacity 0.8s ease';
            mainContent.style.opacity = '1';
        }, 600);
    }, 1800); // Loading time (1.8 seconds)
};

// Copy IP Function
function copyIP() {
    const ip = "hg.dg.vg";
    navigator.clipboard.writeText(ip).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        
        setTimeout(() => {
            toast.classList.remove('flex');
            toast.classList.add('hidden');
        }, 2200);
    }).catch(() => {
        prompt("Copy this IP:", ip);
    });
}
