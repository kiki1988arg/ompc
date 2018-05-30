import { Contrat } from '@models/contrat';
import * as faker from 'faker';

const fakerjs = faker;



export const mock = [
    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'http://www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },     {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})
    },    {
        'DocNumber': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Society': fakerjs.commerce.productName(),
        'Buyer': fakerjs.company.companyName(),
        'CreationDate': fakerjs.date.recent(),
        'Amount': fakerjs.random.number(1000000),
        'PaymentCondition': fakerjs.finance.transactionType(),
        'InitialDate': fakerjs.date.past(),
        'EndDate': fakerjs.date.future(),
        'OC': 'www.google.com',
        'Version': fakerjs.random.number({ min: 0, max: 999})



    }];
