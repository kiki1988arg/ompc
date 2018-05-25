import { ContratService } from './../models/contratservices';
import * as faker from 'faker';

const fakerjs = faker;



export const mock = [
    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },     {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()
    },    {
        'NroPedido': fakerjs.random.number({ min: 1000000000, max: 9999999999 }),
        'Sociedad': fakerjs.commerce.productName(),
        'Comprador': fakerjs.company.companyName(),
        'FechaCreacion': fakerjs.date.recent(),
        'Importe': fakerjs.random.number(1000000),
        'CondPago': fakerjs.finance.transactionType(),
        'FechaIni': fakerjs.date.past(),
        'FechaFin': fakerjs.date.future(),
        'OC': fakerjs.random.image,
        'version': fakerjs.random.number()



    }];
