import { faker } from '@faker-js/faker'
import { writeFileSync } from 'fs';

let database = { products: [] = []}

function createRamdomProduct(index) {
    return {
        id: index,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: 'https://picsum.photos/400?random=' + index,
        quantity: faker.random.numeric()
    }
}

Array.from({ length: 100 }).forEach((values, index) => {
    database.products.push(createRamdomProduct(index + 1))
});

console.log(JSON.stringify(database))
writeFileSync('./server/database.json', JSON.stringify(database, null, "\t"))