export const drawerWidth = 280;

export const sidebarStyles = {
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'primary.main',
            color: 'secondary.light',
        },
    },
    logo: {
        color: 'secondary.light',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 2,
    },
    listItem: {
        color: 'secondary.light',
        '&.Mui-selected': {
            backgroundColor: 'primary.dark',
        },
        '&:hover': {
            backgroundColor: 'primary.dark',
        },
    },
};