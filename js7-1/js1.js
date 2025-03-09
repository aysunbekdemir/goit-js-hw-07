document.addEventListener("DOMContentLoaded", () => {

    const categoriesList = document.querySelector("#categories");

    if (!categoriesList) {
        console.error("Element #categories not found!");
        return;
    }


    const categories = categoriesList.querySelectorAll(".item");
    console.log(`Number of categories: ${categories.length}`);


    categories.forEach(category => {
        const categoryTitle = category.querySelector("h2").textContent;
        const itemsCount = category.querySelectorAll("ul li").length;
        console.log(`Category: ${categoryTitle}`);
        console.log(`Elements: ${itemsCount}`);
    });
});

