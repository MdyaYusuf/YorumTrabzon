const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start);

const getPageList = (totalPages, page, maxLength) => {
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return [...range(1, maxLength - sideWidth - 1), 0, ...range(totalPages - sideWidth + 1, totalPages)];
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return [...range(1, sideWidth), 0, ...range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)];
    }

    return [
        ...range(1, sideWidth),
        0,
        ...range(page - leftWidth, page + rightWidth),
        0,
        ...range(totalPages - sideWidth + 1, totalPages)
    ];
};

$(() => {
    let numberOfItems = $(".card-content .card").length;
    const limitPerPage = 3;
    let totalPages = Math.ceil(numberOfItems / limitPerPage);
    const paginationSize = 7;
    let currentPage;
    let activeCategory = "all";

    const updatePagination = () => {
        const totalCategoryItems = $(".card-content .card[data-name='" + activeCategory + "']").length;
        const totalCategoryPages = Math.ceil(totalCategoryItems / limitPerPage);

        totalPages = (activeCategory === "all") ? Math.ceil(numberOfItems / limitPerPage) : totalCategoryPages;

        $(".pagination li").slice(1, -1).remove();
        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage)
                .append($("<a>").addClass("page-link").attr({ href: "#" }).text(item || "..."))
                .insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
    };

    const showPage = (whichPage) => {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-content .card").hide().filter(function () {
            const cardCategory = $(this).data("name");
            return (activeCategory === "all" || activeCategory === cardCategory);
        }).slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        updatePagination();

        $(".pagination li").slice(1, -1).remove();
        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage)
                .append($("<a>").addClass("page-link").attr({ href: "#" }).text(item || "..."))
                .insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;
    };

    $(".pagination").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "#" }).text("Önceki")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "#" }).text("Sonraki"))
    );

    $(".card-content").show();
    showPage(1);

    $(document).on("click", ".categories .category", function () {
        activeCategory = $(this).data("name");
        showPage(1);
    });

    $(document).on("click", ".pagination li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    });
});
