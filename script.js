document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".news__box");

    const checkBoxes = () => {
        const triggerBottom = window.innerHeight * 0.8; 
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes();
});



document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector(".burger-btn");
    const navItems = document.querySelector(".nav__items");
    const navLinks = document.querySelectorAll(".nav__items a");

   
    burgerBtn.addEventListener("click", function () {
        navItems.classList.toggle("show");
    });

    // Zamknięcie menu po kliknięciu w link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navItems.classList.remove("show");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector('#news'); // Element w index.html, gdzie chcesz dodać wiadomości
    
    // Załaduj zawartość pliku news.html
    fetch('components/news.html')
        .then(response => response.text())  // Odbieramy zawartość pliku jako tekst
        .then(data => {
            // Stwórz tymczasowy element, aby dodać otrzymaną zawartość
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Wybierz pierwsze dwa elementy z klasy .news__box w news.html
            const newsBoxes = tempDiv.querySelectorAll('.news__box');
            
            if (newsBoxes.length >= 2) {
                // Pobierz pierwsze dwa elementy
                const lastTwoNews = Array.from(newsBoxes).slice(0, 2);

                // Dodaj je do elementu w index.html
                lastTwoNews.forEach(newsBox => {
                    newsContainer.appendChild(newsBox);
                });
            }
        })
        .catch(error => {
            console.error("Wystąpił błąd przy ładowaniu news.html:", error);
        });
});

