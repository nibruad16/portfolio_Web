document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav_toggle');
    const navList = document.querySelector('.nav_list');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('nav_list_active');
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Programmer", "Database Designer", "Video Editor"];
    let currentIndex = 0;
    const roleElement = document.querySelector('.role');

    function updateRole() {
        roleElement.textContent = roles[currentIndex];
        currentIndex = (currentIndex + 1) % roles.length;
    }

    setInterval(updateRole, 4000);
});
