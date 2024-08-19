import products from '../assets/products.json';
import brands from '../assets/brands.json';

const getAllProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 400);
    })
}

const getBrands = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(brands);
        }, 600);
    })
}

export { getAllProducts, getBrands };
