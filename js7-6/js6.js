document.addEventListener("DOMContentLoaded", () => {
    // Rastgele renk üreten fonksiyon
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    // DOM elemanlarını seçiyoruz
    const inputEl = document.querySelector('#controls input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    if (!inputEl || !createBtn || !destroyBtn || !boxesContainer) {
        console.error("Hata: Gerekli HTML elemanları bulunamadı!");
        return;
    }

    // "Create" butonuna tıklama olayı
    createBtn.addEventListener('click', () => {
        const amount = parseInt(inputEl.value.trim(), 10);

        if (isNaN(amount) || amount < 1 || amount > 100) {
            alert('Please enter a valid number between 1 and 100.');
            inputEl.value = '';
            return;
        }

        createBoxes(amount);
        inputEl.value = ''; // Inputu temizle
    });

    // "Destroy" butonuna tıklama olayı
    destroyBtn.addEventListener('click', destroyBoxes);

    // Box oluşturma fonksiyonu
    function createBoxes(amount) {
        destroyBoxes(); // Önce mevcut kutuları temizle

        const boxes = [];
        let boxSize = 30;

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            box.style.backgroundColor = getRandomHexColor();
            box.style.borderRadius = '5px';
            box.style.transition = 'transform 0.2s';
            box.style.cursor = 'pointer';

            // Hover efekti
            box.addEventListener('mouseover', () => {
                box.style.transform = 'scale(1.1)';
            });

            box.addEventListener('mouseout', () => {
                box.style.transform = 'scale(1)';
            });

            boxes.push(box);
            boxSize += 10; // Her kutu bir öncekinden 10px daha büyük
        }

        boxesContainer.append(...boxes); // Tüm kutuları tek seferde ekle
    }

    // Box'ları temizleme fonksiyonu
    function destroyBoxes() {
        boxesContainer.innerHTML = '';
    }
});

