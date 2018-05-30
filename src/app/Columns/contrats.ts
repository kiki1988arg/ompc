import { IColumnSetting } from './Icolumns';

export const contratscolumns: IColumnSetting[] = [
    {
        field: 'DocNumber',
        title: 'Nro Contrato',
        type: 'numeric',
        width: '30'
    },
    {
        field: 'Society',
        title: 'Sociedad',
        type: 'text',
        width: '80'
    },
    {
        field: 'Buyer',
        title: 'Comprador',
        type: 'text',
        width: '60'
    },
    {
        field: 'CreationDate',
        title: 'Fecha de creación',
        type: 'date',
        format: '{0:d}',
        width: '45'
    },
    {
        field: 'Amount',
        title: 'Importe',
        type: 'numeric',
        width: '30'
    },
    {
        field: 'PaymentCondition',
        title: 'Cond Pago',
        type: 'text',
        width: '50'
    },
    {
        field: 'InitialDate',
        title: 'Fecha de inicio',
        type: 'date',
        format: '{0:d}',
        width: '60'
    },
    {
        field: 'EndDate',
        title: 'Fecha de fin',
        type: 'date',
        format: '{0:d}',
        width: '45'
    },
    {
        field: 'Version',
        title: 'Version',
        type: 'numeric',
        width: '45'
    }

];



