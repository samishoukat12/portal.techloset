import {
    Subscriptions,
    Groups,
    LocalActivity,
    Face,
    Dashboard,
    LibraryAddCheck,
    QuestionAnswerRounded,
    ContactMail,
} from '@mui/icons-material';
import Business from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SpeakerIcon from '@mui/icons-material/Speaker';
import WebhookIcon from '@mui/icons-material/Webhook';
import GroupIcon from '@mui/icons-material/Group';
import StorageIcon from '@mui/icons-material/Storage';
import CategoryIcon from '@mui/icons-material/Category';
import DuoIcon from '@mui/icons-material/Duo';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
export var MENU_ITEMS = [
    {
        text: 'Dashboard',
        icon: <Dashboard />,
        path: '/',
    },
    {
        text: 'Staff',
        icon: <PeopleAltIcon />,
        path: '/staff',
    },
    {
        text: 'Courses',
        icon: <Subscriptions />,
        path: '/courses',
    },
    {
        text: 'Course Category',
        icon: <CategoryIcon />,
        path: '/courseCategory',
    },
    {
        text: 'Lectures',
        icon: <DuoIcon />,
        path: '/lectures',
    },
    {
        text: 'Course Batch',
        icon: <LibraryBooksIcon />,
        path: '/courseBatch',
    },
    {
        text: 'Students',
        icon: <Groups/>,
        path: '/students'
    },
    {
        text: 'Enrollment Approval',
        icon: <LibraryAddCheck />,
        path: '/approve-enrollment'
    },
    {
        text: 'Success Stories',
        icon: <LocalActivity />,
        path: '/successStory'
    },
    {
        text: 'Events',
        icon: <EventAvailableIcon />,
        path: '/events'
    },
    {
        text: 'Contact',
        icon: <ContactMail />,
        path: '/contactus'
    },
    {
        text: 'FAQs',
        icon: <QuestionAnswerRounded />,
        path: '/faq'
    },
    {
        text: 'My Courses',
        icon: <Subscriptions />,
        path: '/myCourse',
    },
    {
        text: 'Assignments',
        icon: <AssignmentIcon />,
        path: '/assignments',
    },
    {
        text: 'Quiz',
        icon: <QuizIcon />,
        path: '/quiz',
    },
    {
        text: 'Attendance',
        icon: <CoPresentIcon />,
        path: '/attendance',
    },
    {
        text: 'Lecture',
        icon: <LaptopChromebookIcon />,
        path: '/lecture',
    },
    {
        text: 'Speakers',
        icon: <SpeakerIcon fontSize='medium' />,
        path: '/speakers',
    },
    {
        text: 'Profile',
        icon: <Face />,
        path: `/profile/id`,
    },
    {
        text: 'settings',
        icon: <SettingsIcon />,
        path: '/settings',
    },
    {
        text: 'User Groups',
        path: '/user-groups',
        icon: <GroupIcon />,
    },
    {
        text: 'Tabs Permission',
        path: '/tabs-permission',
        icon: <WebhookIcon />,
    },
    {
        text: 'Api Permission',
        path: '/api-permissions',
        icon: <StorageIcon />,
    },
    {
        text: 'All Organization',
        path: '/allOrganization',
        icon: <Business />,
    }
];

