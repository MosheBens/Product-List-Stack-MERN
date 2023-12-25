// Charge Of The DarkMode Display
export function initializeThemeToggle() {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    // title-up
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            document.getElementById("root").style.backgroundColor = "#101010";
            
            // Get elements by class name
            var elementsByClass = document.getElementsByClassName("darklightid");
            // Loop through the collection and set the color style
            for (var i = 0; i < elementsByClass.length; i++) {
                elementsByClass[i].style.color = "white";
            }

            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.getElementById("root").style.backgroundColor = "white";
            // Get elements by class name
            var elementsByClass = document.getElementsByClassName("darklightid");
            // Loop through the collection and set the color style
            for (var i = 0; i < elementsByClass.length; i++) {
                elementsByClass[i].style.color = "black";
            }
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            document.getElementById("root").style.backgroundColor = "white";
            // Get elements by class name
            var elementsByClass = document.getElementsByClassName("darklightid");
            // Loop through the collection and set the color style
            for (var i = 0; i < elementsByClass.length; i++) {
                elementsByClass[i].style.color = "black";
            }
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            document.getElementById("root").style.backgroundColor = "#101010";
            // Get elements by class name
            var elementsByClass = document.getElementsByClassName("darklightid");
            // Loop through the collection and set the color style
            for (var i = 0; i < elementsByClass.length; i++) {
                elementsByClass[i].style.color = "white";
            }
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
}