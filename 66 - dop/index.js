import { getProducts, getCategories, getProductsByCategory, getSearchResults, formatPrice } from "./requests.js";

const productsContainer = document.querySelector('.js-products');
const select = document.querySelector('.js-select');
const search = document.querySelector('.js-search');

const addProductToContainer = (product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const thumbnailSrc = product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/150'; // Заглушка, если изображение отсутствует

    productElement.innerHTML = `
        <img class="product__img" src="${thumbnailSrc}" alt="">
        <div class="product__body">
            <p class="product__price">${product.price ? formatPrice(product.price) : 'Цена не указана'}</p>
            <h2 class="product__title">${product.title ? product.title : 'Название не указано'}</h2>
            <p class="product__descr">${product.description ? product.description : 'Описание отсутствует'}</p>
            <p class="product__brand">Brand: <span>${product.brand ? product.brand : 'Бренд не указан'}</span></p>
            <p class="product__category">Category: <span>${product.category ? product.category : 'Категория не указана'}</span></p>
            <div class="rating product__rating">
                <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <p class="rating__value">${product.rating ? product.rating : 'Рейтинг не указан'}</p>
            </div>
        </div>
    `;

    productsContainer.appendChild(productElement);
};

const fetchAndDisplayProducts = async () => {
    try {
        const products = await getProducts();
        products.forEach(addProductToContainer);
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
    }
};

const fetchAndDisplayCategories = async () => {
    try {
        const categories = await getCategories();
        categories.forEach((category) => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Ошибка при получении категорий:', error);
    }
};

const fetchAndDisplayProductsByCategory = async (category) => {
    try {
        const products = await getProductsByCategory(category);
        // Очистить текущий контейнер и добавить новые товары
        productsContainer.innerHTML = '';
        products.forEach(addProductToContainer);
    } catch (error) {
        console.error('Ошибка при получении товаров по категории:', error);
    }
};

const fetchAndDisplaySearchResults = async (word) => {
    try {
        const products = await getSearchResults(word);
        // Очистить текущий контейнер и добавить новые товары
        productsContainer.innerHTML = '';
        products.forEach(addProductToContainer);
    } catch (error) {
        console.error('Ошибка при поиске товаров:', error);
    }
};

// Обработчик выбора категории
select.addEventListener('change', () => {
    const selectedCategory = select.value;
    if (selectedCategory) {
        fetchAndDisplayProductsByCategory(selectedCategory);
    } else {
        // Если выбрана опция "Выберите категорию", отображаем все товары
        fetchAndDisplayProducts();
    }
});

// Обработчик поиска
search.addEventListener('input', () => {
    const searchWord = search.value.trim();
    if (searchWord) {
        fetchAndDisplaySearchResults(searchWord);
    } else {
        // Если поле поиска пустое, отображаем все товары
        fetchAndDisplayProducts();
    }
});

// Загрузить все категории и товары при загрузке страницы
fetchAndDisplayCategories();
fetchAndDisplayProducts();