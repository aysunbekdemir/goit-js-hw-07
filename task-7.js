document.addEventListener("DOMContentLoaded", () => {
    const categoriesList = document.querySelector("#categories");
    if (!categoriesList) {
        console.error("Hata: #categories öğesi bulunamadı!");
        return;
    }

    const categoryItems = categoriesList.querySelectorAll(".item");
    console.log(`Number of categories: ${categoryItems.length}\n`);

    categoryItems.forEach(category => {
        const titleElement = category.querySelector("h2");
        const itemElements = category.querySelectorAll("ul li");

        if (titleElement && itemElements) {
            const title = titleElement.textContent;
            console.log(`Category: ${title}`);
            console.log(`Elements: ${itemElements.length}\n`);
        } else {
            console.error("Hata: Kategori başlığı veya iç öğeler bulunamadı!");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {
            url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
            alt: "White and Black Long Fur Cat",
        },
        {
            url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
            alt: "Orange and White Koi Fish Near Yellow Koi Fish",
        },
        {
            url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
            alt: "Group of Horses Running",
        }
    ];

    const gallery = document.querySelector(".gallery");

    if (!gallery) {
        console.error("Hata: .gallery öğesi bulunamadı!");
        return;
    }

    const galleryMarkup = images.map(({ url, alt }) => 
        `<li><img src="${url}" alt="${alt}"></li>`
    ).join("");

    gallery.insertAdjacentHTML("beforeend", galleryMarkup);
});


document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.querySelector("#name-input");
    const nameOutput = document.querySelector("#name-output");

    if (!nameInput || !nameOutput) {
        console.error("Hata: Gerekli HTML öğeleri bulunamadı!");
        return;
    }

    nameInput.addEventListener("input", () => {
        const inputValue = nameInput.value.trim();
        nameOutput.textContent = inputValue !== "" ? inputValue : "Anonymous";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");

    if (!loginForm) {
        console.error("Hata: Form bulunamadı!");
        return;
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Sayfanın yenilenmesini önler

        const email = loginForm.elements.email.value.trim();
        const password = loginForm.elements.password.value.trim();

        if (email === "" || password === "") {
            alert("All form fields must be filled in!");
            return;
        }

        const formData = {
            email: email,
            password: password
        };

        console.log("Form Data:", formData);

        loginForm.reset(); // Formu temizler
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const colorSpan = document.querySelector(".color");
    const changeColorButton = document.querySelector(".change-color");

    if (!colorSpan || !changeColorButton) {
        console.error("Hata: Gerekli öğeler bulunamadı!");
        return;
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    }

    changeColorButton.addEventListener("click", () => {
        const newColor = getRandomHexColor();
        document.body.style.backgroundColor = newColor;
        colorSpan.textContent = newColor;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#box-count");
    const createButton = document.querySelector("[data-create]");
    const destroyButton = document.querySelector("[data-destroy]");
    const boxesContainer = document.querySelector("#boxes");

    if (!input || !createButton || !destroyButton || !boxesContainer) {
        console.error("Hata: Gerekli öğeler bulunamadı!");
        return;
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    }

    function createBoxes(amount) {
        boxesContainer.innerHTML = ""; // Önceki kutuları temizle
        let size = 30;

        if (amount < 1 || amount > 100) {
            alert("Please enter a number between 1 and 100.");
            return;
        }

        const boxElements = [];
        for (let i = 0; i < amount; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            box.textContent = i + 1;
            size += 10;
            boxElements.push(box);
        }

        boxesContainer.append(...boxElements);
        input.value = ""; // Input alanını temizle
    }

    function destroyBoxes() {
        boxesContainer.innerHTML = "";
    }

    createButton.addEventListener("click", () => {
        createBoxes(Number(input.value.trim()));
    });

    destroyButton.addEventListener("click", destroyBoxes);
});

