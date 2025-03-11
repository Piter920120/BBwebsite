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

  
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navItems.classList.remove("show");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector("#news-container");

    if (!newsContainer) {
        console.error("Błąd: Nie znaleziono #news-container w index.html!");
        return;
    }

    fetch("components/news.html")
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;

            const newsContent = tempDiv.querySelector(".news-container");
            if (!newsContent) {
                console.error("Błąd: Nie znaleziono .news-container w news.html!");
                return;
            }

            fetch("/news.json")
                .then(response => response.json())
                .then(data => {
                   
                    const latestNews = data.slice(0, 2); 

                    if (newsContainer.innerHTML.trim() === "") {
                        
                        latestNews.forEach(news => {
                            const newsBox = document.createElement("div");
                            newsBox.classList.add("news__box");

                            newsBox.innerHTML = `
                                <div class="news__box-img">
                                    <img src="${news.image}" alt="news" class="news__img">
                                </div>
                                <div class="news__box-text">
                                    <h3 class="news__title">${news.title}</h3>
                                    <h4 class="news__date">${news.date}</h4>
                                    <p class="news__tags">Tagi: ${news.tags.join(", ")}</p>
                                    <p class="news__text">${news.text}</p>
                                </div>
                            `;
                            newsContainer.appendChild(newsBox);
                        });
                    }
                })
                .catch(error => console.error("Błąd ładowania newsów:", error));
        })
        .catch(error => console.error("Błąd przy ładowaniu news.html:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("/news.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Załadowane newsy:", data); 
            const newsContainer = document.querySelector(".news-container");
            if (!newsContainer) {
                console.error("Błąd: Nie znaleziono kontenera .news-container");
                return;
            }

            newsContainer.innerHTML = "";

            data.forEach(news => {
                const newsBox = document.createElement("div");
                newsBox.classList.add("news__box");

                newsBox.innerHTML = `
                    <div class="news__box-img">
                        <img src="${news.image}" alt="news" class="news__img">
                    </div>
                    <div class="news__box-text">
                        <h3 class="news__title">${news.title}</h3>
                        <h4 class="news__date">${news.date}</h4>
                        <p class="news__tags">Tagi: ${news.tags.join(", ")}</p>
                        <p class="news__text">${news.text}</p>
                    </div>
                `;

                newsContainer.appendChild(newsBox);
            });
        })
        .catch(error => console.error("Błąd ładowania newsów:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../news.json")
        .then(response => response.json())
        .then(data => {
            const categories = [
                { tag: "junior", containerId: "junior-news" },
                { tag: "main", containerId: "main-news" },
                { tag: "extreme", containerId: "extreme-news" },
                { tag: "fit", containerId: "fit-news" },
                { tag: "graffiti", containerId: "graffiti-news" },
                { tag: "music", containerId: "music-news", emptyMessage: "Brak wydarzeń muzycznych na ten moment." },
                { tag: "party", containerId: "party-news" },
                { tag: "shop", containerId: "shop-news" },
                { tag: "tattoo", containerId: "tattoo-news" },
                { tag: "2k", containerId: "twokey-news" }
            ];

            categories.forEach(({ tag, containerId, emptyMessage }) => {
                renderNews(data, tag, containerId, emptyMessage);
            });
        })
        .catch(error => console.error("Błąd wczytywania newsów:", error));
});

function renderNews(data, tag, containerId, emptyMessage = null) {
    const filteredNews = data.filter(news => news.tags.includes(tag));
    const container = document.getElementById(containerId);

    if (!container) return; 
    if (filteredNews.length === 0 && emptyMessage) {
        container.innerHTML = `<p>${emptyMessage}</p>`;
        return;
    }

    filteredNews.forEach(news => {
        const newsBox = document.createElement("div");
        newsBox.classList.add("news__box");
        newsBox.innerHTML = `
            <div class="news__box-img">
                <img src="${news.image}" alt="news" class="news__img">
            </div>
            <div class="news__box-text">
                <h3 class="news__title">${news.title}</h3>
                <h4 class="news__date">${news.date}</h4>
                <p class="news__text">${news.text}</p>
            </div>
        `;
        container.appendChild(newsBox);
    });
}
