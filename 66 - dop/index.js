import { fetchProducts, fetchCategories, fetchProductsByCategory, fetchSearchByProducts } from "./requests.js";
import { addProductToContainer } from "./utils.js";

const productsContainer = document.querySelector('.js-products');
const select = document.querySelector('.js-select');
const search = document.querySelector('.js-search');

// Обработчик выбора категории
select.addEventListener('change', () => {
    const selectedCategory = select.value;
    if (selectedCategory) {
        fetchProductsByCategory(selectedCategory);
    } else {
        // Если выбрана опция "Выберите категорию", отображаем все товары
        fetchProducts();
    }
});

// Обработчик поиска
search.addEventListener('input', () => {
    const searchWord = search.value.trim();
    if (searchWord) {
        fetchSearchByProducts(searchWord);
    } else {
        // Если поле поиска пустое, отображаем все товары
        fetchProducts();
    }
});

// Загружаем все категории и товары при загрузке страницы
fetchCategories();
fetchProducts();