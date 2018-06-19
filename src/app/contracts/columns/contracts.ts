import { IColumnSetting } from '@interfaces/Icolumns';

export const contractscolumns: IColumnSetting[] = [
    {
        field: 'PurchaseDocumentNumber',
        title: 'Nro Contrato',
        type: 'numeric',
        width: '30'
    },
    {
        field: 'Company',
        title: 'Sociedad',
        type: 'text',
        width: '50'
    },
    {
        field: 'BuyerDesc',
        title: 'Comprador',
        type: 'text',
        width: '60'
    },
    {
        field: 'DateRelease',
        title: 'Fecha de creación',
        type: 'date',
        format: '{0:d}',
        width: '45'
    },
    {
        field: 'TotalAmount',
        title: 'Importe',
        type: 'text',
        width: '30'
    },
    {
        field: 'Currency',
        title: 'Mon',
        type: 'text',
        width: '30'
    },
    {
        field: 'PaymentConditionDesc',
        title: 'Cond Pago',
        type: 'text',
        width: '80'
    },
    {
        field: 'DateValidityAgreementFrom',
        title: 'Fecha de inicio',
        type: 'text',
        format: '{0:d}',
        width: '40'
    },
    {
        field: 'DateValidityAgreementTo',
        title: 'Fecha de fin',
        type: 'text',
        format: '{0:d}',
        width: '45'
    },
    // {
    //     field: 'OC',
    //     title: 'OC',
    //     type: 'text',
    //     width: '50'
    // },
    // {
    //     field: 'Version',
    //     title: 'Version',
    //     type: 'text',
    //     width: '50',

    // },

];



