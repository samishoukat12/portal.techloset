
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Box, Button, Checkbox, Paper, TableContainer, TableHead, Toolbar } from '@mui/material';
import { Close, Delete, Edit } from '@mui/icons-material'
import { TableRow, Table, TableCell, } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { colors } from '../../constants/Color';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import { tableCellClasses } from "@mui/material/TableCell";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

export const NewTableStyle = {
    Paper: styled(Paper)(() => ({
        width: '100%',
        mb: 2,
        borderRadius: 16
    })),
    SelectedContainer: styled('div')(() => ({
        display: 'flex'
    })),
    Typography: styled('p')(() => ({
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        color: '#121F3E',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        marginRight: 24,

    })),
    Checkbox: styled(Checkbox)(({ selected }) => ({
        color: selected ? '#1E86FF' : '#E5EBF0',
    })),
    Table: styled(Table)(({ theme }) => ({
        // minWidth: 'auto',
        // overflow: "scroll",
        // overflowY: "auto",
        [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
        },
        "@media (max-width: 900px)": {
            width: 1200,
        },
    })),
    TableContainer: styled(TableContainer)(({ theme }) => ({
        overflow: 'scroll',
        overflowX: 'auto',
        // overflowY: 'auto',
        // height: "100%",
        width: '98%',
        marginLeft: '1%',
        mrginRight: '1%',

    })),

    Tablehead: styled(TableHead)(({ theme }) => ({
        borderRadius: 8,
        backgroundColor: '#F8FAFB',
        height: 42,
        // minWidth: "auto"
    })),
    EmailNameContainer: styled('div')(({ theme }) => ({
        marginLeft: 12,

    })),
    PTime: styled('p')(({ theme }) => ({
        margin: 0,

    })),
    PTagName: styled('p')(({ theme }) => ({
        fontSize: '14px',
        margin: 0,
        fontWeight: '500',
        marginBottom: 4,

    })),
    PTagEmail: styled('p')(({ theme }) => ({
        fontSize: '12px',
        margin: 0,
        fontWeight: '500',
        color: '#96A0B5',

    })),
    Image: styled('img')(({ theme }) => ({
        height: "50px",
        width: "100px",

    })),
    AvatarBox: styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center'

    })),
    Avatar: styled(Avatar)(({ bgColor, Color }) => ({
        backgroundColor: `${bgColor}`,
        color: `${Color}`
    })),

    // Icons
    FilterListIcon: styled(FilterAltIcon)(() => ({
        fontSize: 27,
        marginRight: 10,
        marginLeft: 10,
        cursor: 'pointer',
        color: '#1E86FF'
    })),
    AddIcon: styled(AddIcon)(() => ({
        fontSize: 27,
        cursor: 'pointer',
        color: '#1E86FF'
    })),
    CloseIcon: styled(Close)({
        color: '#fff',
        fontSize: 22,
        marginTop: 2
    }),
    SearchIcon: styled(SearchIcon)(() => ({
        fontSize: 27,
        color: '#1E86FF'
    })),
    DeleteIcon: styled(Delete)(() => ({
        color: '#f44336'
    })),
    EditIcon: styled(Edit)(({ theme }) => ({
        // color: '#96A0B5',
        // color: '#0ff4de',
        color: '#1e86ff',
        // marginLeft: 12.5


    })),
    CheckCircleIcon: styled(CheckCircleIcon)(({ theme }) => ({
        // color: '#0ff4de'
        color: '#20c94f'
    })),
    DoDisturbIcon: styled(DoDisturbIcon)(({ theme }) => ({
        color: '#F72e3a',
        
    })),
    IconDiv: styled('div')(() => ({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    })),
    MobileViewTableHeader: styled(Toolbar)(({ searchShow }) => ({
        display: searchShow ? 'block' : 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        "@media (max-width: 600px)": {
            marginLeft: 20,
            marginBottom: 20
        },
        marginRight: 10,
    })),
    PaginationContainer: styled('div')(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    })),
    PaginationText: styled('p')(() => ({
        margin: 0,
        color: '#96A0B5',
        marginLeft: 8,
        fontSize: 14,
    })),
    SearchBox: styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: 8,
        justifyContent: 'space-between',
    })),
    CloseIconBox: styled(Box)(({ theme }) => ({
        width: 26,
        height: 26,
        marginLeft: 4,
        backgroundColor: '#A9A9A9',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',

    })),
    HeaderIconsContainer: styled('div')(() => ({
        display: 'flex',
        alignItems: 'center',
    })),
    Role: styled('div')(({ bgColor, Color }) => ({
        borderRadius: '8px',
        backgroundColor: `${bgColor}`,
        color: `${Color}`,
        border: 'none',
        width: 'max-content',
        paddingInline: 6,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 500,
    })),
    FilterButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border: ' 1px solid #E5EBF0',
        backgroundColor: "#fff",
        borderRadius: '8px',
        color: '#96A0B5',
        width: 90,
        height: 37,
        "&:hover": {
            backgroundColor: "#fff",
            border: ' 1px solid #E5EBF0',
        }

    })),
    ExportButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: ' rgba(30, 134, 255, 0.1)',
        color: '#1E86FF',
        width: 99,
        height: 37,
        marginLeft: 12,
        "&:hover": {
            backgroundColor: ' rgba(30, 134, 255, 0.1)',
            border: 'none',
        }

    })),
    AddButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#1E86FF;',
        color: '#ffffff',
        width: 115,
        height: 37,
        marginLeft: 12,
        "&:hover": {
            backgroundColor: '#1E86FF;',
            border: 'none',
        }

    })),

    DelButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#FF5963;',
        color: '#ffffff',
        width: 98,
        height: 37,
        "&:hover": {
            backgroundColor: '#FF5963;',
            border: 'none',
        }

    })),

}
