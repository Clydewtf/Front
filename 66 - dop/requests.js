export const formatPrice = (price) => {
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(price);
};

export const getProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/');
        const data = await response.json();
        const productsArray = Array.isArray(data.products) ? data.products : [data.products];
        return productsArray;
    } catch (error) {
        console.error('Ошибка при запросе товаров:', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const categories = await response.json();
        return categories;
    } catch (error) {
        console.error('Ошибка при запросе категорий:', error);
        throw error;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        const productsArray = Array.isArray(data.products) ? data.products : [data.products];
        return productsArray;
    } catch (error) {
        console.error('Ошибка при запросе товаров по категории:', error);
        throw error;
    }
};

export const getSearchResults = async (word) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${word}`);
        const data = await response.json();
        const productsArray = Array.isArray(data.products) ? data.products : [data.products];
        return productsArray;
    } catch (error) {
        console.error('Ошибка при поиске товаров:', error);
        throw error;
    }
};