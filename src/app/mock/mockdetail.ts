import * as faker from 'faker';

const fakerjs = faker;


export const mockdetail = [
    {
        'Position': faker.random.number(),
        'History': faker.random.word(),
        'Material': faker.random.word(),
        'Description': faker.random.word(),
        'Quantity': faker.random.number(),
        'CantUM': faker.random.word(),
        'Price': faker.random.word(),
        'Currency': faker.random.word(),
        'ArticleGroup': faker.random.word(),
        'Serv': faker.random.word()

    }
];
