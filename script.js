document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Programmer", "Database Designer", "Video Editor"];
    let roleIndex = 0;
    const roleElement = document.querySelector('.role_intro');
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000;

    function typeRole() {
        if (roleIndex < roles.length) {
            const currentRole = roles[roleIndex];
            roleElement.textContent = '';
            let charIndex = 0;

            function typeChar() {
                if (charIndex < currentRole.length) {
                    roleElement.textContent += currentRole.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, typingSpeed);
                } else {
                    setTimeout(eraseRole, newTextDelay);
                }
            }

            typeChar();
        }
    }

    function eraseRole() {
        if (roleIndex < roles.length) {
            const currentRole = roles[roleIndex];
            let charIndex = currentRole.length;

            function eraseChar() {
                if (charIndex > 0) {
                    roleElement.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(eraseChar, erasingSpeed);
                } else {
                    roleIndex = (roleIndex + 1) % roles.length;
                    typeRole();
                }
            }

            eraseChar();
        }
    }

    typeRole();
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav_toggle');
    const navList = document.querySelector('.nav_list');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('nav_list_active');
    });
});


