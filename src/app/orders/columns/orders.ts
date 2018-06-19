import { IColumnSetting } from '@interfaces/IColumns';

export const ordercolumns: IColumnSetting[] = [

    {
        field: 'PurchaseDocumentNumber',
        title: 'Nro. Pedido',
        type: 'numeric',
        width: '30'
    },
    {
        field: 'CompanyDescription',
        title: 'Sociedad',
        type: 'text',
        width: '30'
    },
    {
        field: 'BuyerDesc',
        title: 'Comprador',
        type: 'text',
        width: '50'
    },
    {
        field: 'DateRelease',
        title: 'Fecha',
        type: 'date',
        format: '{0:d}',
        width: '30'
    },
    {
        field: 'TotalAmount',
        title: 'Importe',
        type: 'numeric',
        width: '30'
    },
    {
        field: 'Currency',
        title: 'Mon',
        type: 'text',
        width: '15'
    },
    {
        field: 'PaymentConditionID',
        title: 'Cond. Pago',
        type: 'text',
        width: '30'
    },
    {
        field: 'ContratReference',
        title: 'Contrato de Referencia',
        type: 'text',
        width: '50'
    },
    {
        field: 'CtaCte',
        title: 'Cta. Cte.',
        type: 'text',
        width: '30'
    },
    {
        field: 'ICO',
        title: 'ICO.',
        type: 'numeric',
        width: '25'
    }
];

