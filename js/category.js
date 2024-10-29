const filterCategory = document.querySelector(".categories");
const filterCard = document.querySelectorAll(".card");

window.onload = () => {
    filterCategory.addEventListener("click", (selectedCategory) => {
        if (selectedCategory.target.classList.contains("category")) {
            filterCategory.querySelector(".active").classList.remove("active");
            selectedCategory.target.classList.add("active");
            let filterName = selectedCategory.target.getAttribute("data-name");
            filterCard.forEach((card) => {
                let filterCards = card.getAttribute("data-name");
                if ((filterCards == filterName) || filterName == "all") {
                    card.classList.remove("hide");
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                    card.classList.add("hide");
                }
            });
        }
    });
}
