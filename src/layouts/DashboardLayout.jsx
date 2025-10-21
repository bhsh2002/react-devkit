
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

/**
 * @typedef {object} NavItem
 * @property {string} text - @en The text to display for the navigation item. @ar النص الذي سيُعرض لعنصر التنقل.
 * @property {React.ReactNode} [icon] - @en The icon to display for the navigation item. @ar الأيقونة التي ستُعرض بجانب النص.
 * @property {string} path - @en The path/URL for the navigation link. @ar المسار أو الرابط الخاص بعنصر التنقل.
 * @property {React.ElementType} [component='a'] - @en The component to use for the link (e.g., `NavLink` from `react-router-dom`). @ar المكون الذي سيتم استخدامه للرابط (مثل `NavLink` من `react-router-dom`).
 */

/**
 * @en A responsive and customizable dashboard layout component. It provides a standard structure with a sidebar (drawer), an app bar, and a main content area.
 * @ar مكون تخطيط لوحة تحكم متجاوب وقابل للتخصيص. يوفر هيكلًا قياسيًا مع شريط جانبي (درج)، وشريط علوي، ومنطقة محتوى رئيسية.
 *
 * @param {object} props - The component props.
 * @param {Array<NavItem>} [props.navItems=[]] - @en The array of navigation items to display in the sidebar. @ar مصفوفة عناصر التنقل لعرضها في الشريط الجانبي.
 * @param {string} [props.title='Dashboard'] - @en The title displayed in the AppBar. @ar العنوان الذي يُعرض في الشريط العلوي.
 * @param {React.ReactNode} [props.drawerHeader] - @en A React node to be rendered as the header of the sidebar. @ar مكون React ليتم عرضه كرأس للشريط الجانبي.
 * @param {React.ReactNode} [props.headerActions] - @en A React node for actions in the AppBar, typically for a user menu or notifications. @ar مكون React للإجراءات في الشريط العلوي، عادةً لقائمة المستخدم أو الإشعارات.
 * @param {React.ReactNode} props.children - @en The main content of the page to be rendered within the layout. @ar المحتوى الرئيسي للصفحة الذي سيتم عرضه داخل التخطيط.
 */
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
                        // Dynamically assign `to` for router components and `href` for regular links
                        const linkProps = item.component && item.component.displayName === 'NavLink' 
                            ? { to: item.path } 
                            : { href: item.path };

                        return (
                            <ListItem key={index} disablePadding>
                                <ListItemButton component={item.component || 'a'} {...linkProps}>
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
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} color="inherit">
                        {title}
                    </Typography>
                    {headerActions}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawerContent}
                </Drawer>
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
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
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
