import * as faker from 'faker';
const fakerjs = faker;

export const subdetailmock = [
    {
        'DocumentNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Position': fakerjs.random.number(),
        'Material': fakerjs.commerce.product(),
        'Description': fakerjs.commerce.productAdjective(),
        'InitialDate': fakerjs.date.past(),
        'Centro': fakerjs.company.companyName(),
        'Quantity': fakerjs.random.number(),
        'UM': fakerjs.random.locale(),
        'TotalAmount': fakerjs.random.number(),
        'currency': fakerjs.random.word()
    }
];
