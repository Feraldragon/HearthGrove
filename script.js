// Loading Screen
window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        content.style.transition = 'opacity 0.7s ease';
        content.style.opacity = '1';
    }, 1700);
};

// Copy IP
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
