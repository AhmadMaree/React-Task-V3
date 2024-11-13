import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/side-bar';
import { mainContentStyles } from './layoutDashboardStyles';

const DashboardLayout = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box component="main" sx={mainContentStyles}>
                <Outlet />
            </Box>
        </Box>
    )
}
export default DashboardLayout;