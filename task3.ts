let product: {
    readonly id: number;
    name: string;
    price: number;
    inStock: boolean;
    description?: string;
} = {
    id: 1,
    name: "iPhone 15",
    price:2000,
    inStock: true,
};
product.price=2500;
console.log(product);
