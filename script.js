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


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const juniorNews = data.filter(news => news.tags.includes("junior"));
            const container = document.getElementById("junior-news");

            juniorNews.forEach(news => {
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
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const mainNews = data.filter(news => news.tags.includes("main"));
            const container = document.getElementById("main-news");

            mainNews.forEach(news => {
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
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const extremeNews = data.filter(news => news.tags.includes("extreme"));
            const container = document.getElementById("extreme-news");

            extremeNews.forEach(news => {
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
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const fitNews = data.filter(news => news.tags.includes("fit"));
            const container = document.getElementById("fit-news");

            fitNews.forEach(news => {
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
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const graffitiNews = data.filter(news => news.tags.includes("graffiti"));
            const container = document.getElementById("graffiti-news");

            graffitiNews.forEach(news => {
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
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const musicNews = data.filter(news => news.tags.includes("music")); 
            const container = document.getElementById("music-news");

            if (musicNews.length === 0) {
                container.innerHTML = "<p>Brak wydarzeń muzycznych na ten moment.</p>";
                return;
            }

            musicNews.forEach(news => {
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
        })
        .catch(error => console.error("Błąd wczytywania newsów:", error));
});



document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const partyNews = data.filter(news => news.tags.includes("party"));
            const container = document.getElementById("party-news");

            partyNews.forEach(news => {
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
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const shopNews = data.filter(news => news.tags.includes("shop"));
            const container = document.getElementById("shop-news");

            shopNews.forEach(news => {
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
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const tattooNews = data.filter(news => news.tags.includes("tattoo"));
            const container = document.getElementById("tattoo-news");

            tattooNews.forEach(news => {
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
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("../news.json") 
        .then(response => response.json())
        .then(data => {
            const twokeyNews = data.filter(news => news.tags.includes("2k"));
            const container = document.getElementById("twokey-news");

            twokeyNews.forEach(news => {
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
        });
});