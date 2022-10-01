
import { styled, alpha } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { Close, Delete, Edit } from '@mui/icons-material'
import { TableRow, Table, TableCell } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { colors } from '../../constants/Color';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import { MagicSpinner } from 'react-spinners-kit';
export const TableStyle = {
    // Data Fetching Loading Container
    LoaderContainer: styled('div')(() => ({
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
    })),

    // Table Header With Search Bar Box Container

    BoxElement: styled(Box)(({ theme }) => ({
        height: 60,
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        paddingTop: 12,
        [theme.breakpoints.down('sm')]: {
            marginTop: 8,
            paddingTop: 6,
        },
        paddingBottom: 10,
        backgroundColor: colors.white,

        color: 'white',
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19)",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        marginBottom: 10
    })),

    // Table Header With Search Bar For Big Screens


    SeachContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    })),
    SearchAndBtnsContainer: styled('div')(() => ({
        display: 'inline-flex',
        alignItems: 'center',
    })),

    // Table Header With Search Bar For Small Screens

    MobileViewTableHeader: styled(Box)(({ searchShow }) => ({
        display: searchShow ? 'block' : 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    })),
    SearchBox: styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'green',
        justifyContent: 'space-between',
        marginTop: 4

    })),
    CloseIconBox: styled(Box)(({ theme }) => ({
        width: 26,
        height: 26,
        backgroundColor: '#A9A9A9',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',

    })),
    HeaderIconsContainer: styled('div')(() => ({
        display: 'flex',
        alignItems: 'center',
    })),

    // Table

    CustomTable: styled(Table)(({ theme }) => ({
        minWidth: 650,
        overflowX: "auto",
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    })),
    CustomTableRow: styled(TableRow)(({ theme }) => ({
        '&:last-child td, &:last-child th': { border: 0 }
    })),
    CustomTableCell: styled(TableCell)(({ theme }) => ({

    })),
    Image: styled('img')(({ theme }) => ({
        height: "50px",
        width: "100px",
    })),

    // Icons
    FilterListIcon: styled(FilterAltIcon)(() => ({
        fontSize: 27,
        marginRight: 10,
        marginLeft: 10,
        cursor: 'pointer',
        color: '#96A0B5'
    })),
    AddIcon: styled(AddIcon)(() => ({
        fontSize: 27,
        cursor: 'pointer',
        color: '#96A0B5'
    })),
    CloseIcon: styled(Close)({
        color: '#fff',
        fontSize: 22,
        marginTop: 2
    }),
    SearchIcon: styled(SearchIcon)(() => ({
        fontSize: 27,
        color: '#96A0B5'
    })),
    DeleteIcon: styled(Delete)(() => ({
        color: '#f44336'
    })),
    EditIcon: styled(Edit)(({ theme }) => ({
        color: '#ffeb3b'
    })),
    IconDiv: styled('div')(() => ({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    })),
    FilterButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border:' 1px solid #E5EBF0',
        backgroundColor: "#fff",
        borderRadius: '8px',
        color: '#96A0B5',
        width: 90,
        height: 37,
        "&:hover": {
            backgroundColor: "#fff",
            border:' 1px solid #E5EBF0',
        }
    
    })),
    ExportButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border:'none',
        borderRadius: '8px',
        backgroundColor:' rgba(30, 134, 255, 0.1)',
        color: '#1E86FF',
        width: 99,
        height: 37,
        "&:hover": {
            backgroundColor:' rgba(30, 134, 255, 0.1)',
            border: 'none',
        }
    
    })),
    AddButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border:'none',
        borderRadius: '8px',
        backgroundColor:'#1E86FF;',
        color: '#ffffff',
        width: 115,
        height: 37,
        "&:hover": {
            backgroundColor:'#1E86FF;',
            border: 'none',
        }
    
    })),

}





