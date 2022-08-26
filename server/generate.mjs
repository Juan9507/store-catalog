import { faker } from '@faker-js/faker'
import { writeFileSync } from 'fs';

let database = { products: [] = []}

function createRamdomProduct() {
    return {
        id: faker.random.numeric(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: faker.image.abstract(),
        quantity: faker.random.numeric()
    }
}

Array.from({ length: 10 }).forEach(() => {
    database.products.push(createRamdomProduct())
});

console.log(JSON.stringify(database))
writeFileSync('./server/database.json', JSON.stringify(database, null, "\t"))