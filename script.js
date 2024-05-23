document.addEventListener("DOMContentLoaded", () => {
    const piDigits = "14159265358979323";
    let currentIndex = 0;

    const sections = document.querySelectorAll('.fade-in-section');
    const piButton = document.querySelector(".interactive");
    const numberDisplay = document.getElementById("number");
    const messageDisplay = document.getElementById("message");
    const copyButtons = document.querySelectorAll('.copy-button');

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const checkSections = () => {
        sections.forEach((section) => {
            if (isElementInViewport(section)) {
                section.classList.add('is-visible');
            } else {
                section.classList.remove('is-visible');
            }
        });
    };

    window.addEventListener('scroll', checkSections);
    checkSections();

    piButton.addEventListener("click", revealNextDigit);

    function revealNextDigit() {
        if (currentIndex < piDigits.length) {
            numberDisplay.textContent += piDigits[currentIndex];
            currentIndex++;
        } else {
            piButton.disabled = true;
            piButton.style.padding = "60px 30px"
            piButton.textContent = "End of Digits";
        }
    }

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const textToCopy = this.getAttribute('copy-text');
    
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = textToCopy;
            document.body.appendChild(tempTextarea);
    
            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999);
    
            document.execCommand('copy');
    
            document.body.removeChild(tempTextarea);
    
            alert('Copied the tag: ' + textToCopy);
        });
    });
});

document.addEventListener('mousemove', function(event) {
    const background = document.querySelector('.welcome-background');
    const radius = 150;

    const x = event.clientX;
    const y = event.clientY;

    background.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
    background.classList.add('visible');
});

document.addEventListener('mouseleave', function() {
    const background = document.querySelector('.welcome-background');
    background.style.clipPath = 'circle(0px at 0px 0px)';
    background.classList.remove('visible');
});