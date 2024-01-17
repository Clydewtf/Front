export function fetchProducts() {
    const url = 'https://dummyjson.com/products/';
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const productsArray = Array.isArray(data.products) ? data.products : [data.products];
            productsArray.forEach(addProductToContainer);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
}

export function fetchCategories() {
    const url = 'https://dummyjson.com/products/categories';
    return fetch(url)
        .then((response) => response.json())
        .then((categories) => {
            categories.forEach((category) => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                select.appendChild(option);
            });
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
            return []; // Возвращаем пустой массив в случае ошибки
        });
}

export function fetchProductsByCategory(category) {
    const url = `https://dummyjson.com/products/category/${category}`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const productsArray = Array.isArray(data.products) ? data.products : [data.products];

            // Очищаем текущий контейнер и добавляем новые товары
            productsContainer.innerHTML = '';
            productsArray.forEach(addProductToContainer);
        })
        .catch((error) => {
            console.error('Error fetching products by category:', error);
        });
}

export function fetchSearchByProducts(query) {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const productsArray = Array.isArray(data.products) ? data.products : [data.products];

            // Очищаем текущий контейнер и добавляем новые товары
            productsContainer.innerHTML = '';
            productsArray.forEach(addProductToContainer);
        })
        .catch((error) => {
            console.error('Error searching for products:', error);
        });
}