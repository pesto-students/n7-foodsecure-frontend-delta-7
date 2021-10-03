
import {getData} from '../services/service-call';
import moment from 'moment';
export const ROUTES = {
    documentUpload : '/documents/upload',
    removeDocument: '/documents/remove-document/',
    competitionComplaints : '/applications/competition-complaint',
    consumerComplaints: '/applications/consumer-complaint',
    requestForAdvice: '/applications/request-advice',
    addNewMerchant: '/merchants',
    getMerchants: '/merchants',
    getGuidelines: '/constants/guidelines?application_type=',
    getAllParish: '/constants/parish',
    getUploadedDocuments: '/documents/uploaded-documents/',
    getAllDropdowns: '/constants/all-dropdowns/',
    getTransactions: '/transactions',
    getTransaction : '/transactions/',
    registerUser: '/users/register',
    loginUser: '/users/login',
    getZipForAllDocuments: '/documents/all-documents/',
    getTransactionTranscript: '/documents/transaction-transcipt/',
    saveConsumerComplaints: '/applications/consumer-complaint/save',
    saveReqForAdvice : '/applications/request-advice/save',
    verifyToken : '/users/verify-google-token-id',
    getProfileInfo: '/users/profile',
    launchGenericApplication: '/applications/generic-application'
}


export const COLUMN_DEFINITIONS = {
    viewMerchants : [
        {headerName: 'ID', field : 'id'},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Merchant Type', field: 'type'},
        {headerName: 'Email', field: 'email'},
        {headerName: 'Telephone Number', field: 'telephone_number'}
    ],
    viewTransactions: [
        {
            headerName: 'Transaction ID',
            field: 'transaction_number',
            width:160
        },
        {
            headerName : 'Respondent Name',
            valueGetter: (params) => {        
                return params.data.respondent_details?.[0]?.name;
            },
            width:160
        },
        {
            headerName: 'Informant Name', 
            valueGetter : (params) => {
                return params.data.informant_details?.[0]?.name
            },
            width:160
        },
        {
            headerName : 'Application Type',
            field: 'app_type',
            width:250
        },
        {
            headerName : 'Date Submitted On',
            valueGetter: (params) => {
                if(!params.data.submitted_on){
                    return "";
                }
                return moment(params.data.submitted_on).format('MM/DD/YYYY')
            },
            width:120
        },
        {
            headerName : 'Application Status',
            field: 'status',
            width:260
        },
        {
            headerName: 'Documents Copy',
            cellRenderer: 'ActionCellRenderer',
            field: 'trans_id',
            cellRendererParams: {
                type: 'zip',
            },
            width:140
        },
        /*{
            headerName: 'Transaction Transactipts',
            cellRenderer: 'ActionCellRenderer',
            field: 'trans_id',
            cellRendererParams: {
                type: 'transcript',
            },
        },*/
        {
            headerName: 'Resume',
            cellRenderer: 'ActionCellRenderer',
            field: 'trans_id',
            cellRendererParams: {
                type: 'continue_application',
            },
            width:120
        },
    ]
}
