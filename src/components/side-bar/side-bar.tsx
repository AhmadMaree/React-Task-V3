import { Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ERoute, sideBarTitleToolbar } from '../../constant';
import { sidebarStyles } from './sidebarStyles';

const Sidebar = () => {
    return (
        <Drawer variant="permanent" sx={sidebarStyles.drawer}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={sidebarStyles.logo}>
                    {sideBarTitleToolbar}
                </Typography>
            </Toolbar>
            <List>
                <ListItem
                    button
                    component={Link}
                    to={ERoute.PAGE_ONE}
                    selected={location.pathname === ERoute.PAGE_ONE}
                    sx={sidebarStyles.listItem}
                >
                    <ListItemText primary="Star wars Table" />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to={ERoute.PAGE_TWO}
                    selected={location.pathname === ERoute.PAGE_TWO}
                    sx={sidebarStyles.listItem}
                >
                    <ListItemText primary="Add a patient" />
                </ListItem>
            </List>
        </Drawer>
    )
}
export default Sidebar;