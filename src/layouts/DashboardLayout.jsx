import React, { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    CssBaseline,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const drawerWidth = 240;

export const DashboardLayout = ({
    navItems = [],
    title = 'Dashboard',
    drawerHeader,
    headerActions,
    children,
}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <Box>
            {drawerHeader ? (
                <Toolbar sx={{ justifyContent: 'center' }}>{drawerHeader}</Toolbar>
            ) : null}
            <List>
                {navItems.map((item, index) => {
                    const LinkComponent = item.component || 'a';
                    const linkProps = LinkComponent !== 'a' ? { to: item.path } : { href: item.path };
                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton component={LinkComponent} {...linkProps}>
                                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }} // Only show on mobile
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap color='primary' component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    {headerActions}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* Mobile Drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle} // Close on backdrop click
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawerContent}
                </Drawer>
                {/* Desktop Drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawerContent}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: '100vh',
                    backgroundColor: (theme) => theme.palette.grey[100],
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};