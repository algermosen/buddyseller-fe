async function getAll() {
    const res = await fetch('/api/products')
    const data = await res.json()
    return data.products
}

export const productService = { getAll }