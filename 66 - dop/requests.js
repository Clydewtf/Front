export function getProducts() {
    return fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .catch(console.error)
}

export function getProductsByCategory(category) {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(response => response.json())
        .catch(console.error)
}

export function getCategories() {
    return fetch('https://dummyjson.com/products/categories')
        .then(response => response.json())
        .catch(console.error)
}

export function getProductsBySearch(query) {
    return fetch("https://dummyjson.com/products/search?q=" + query)
        .then(response => response.json())
        .catch(console.error)
}