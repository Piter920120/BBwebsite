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
