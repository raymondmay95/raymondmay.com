import { CalendarTodayOutlined, HomeOutlined, Logout, Menu as MenuIcon, MenuOpenOutlined, NoteAltOutlined, Person, Settings, TaskOutlined } from '@mui/icons-material';
import { Avatar, Container, Divider, Drawer, DrawerProps, IconButton, Menu, MenuItem, MenuItemProps, MenuList, MenuProps, Stack, Toolbar, alpha, styled } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { NavLink, NavLinkProps, Outlet, useLocation } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import { Auth } from '../../auth/AuthContext';

const drawerWidth = 175

export default function AuthorizedLayout() {
    const { pathname } = useLocation()
    const isDesktop = useResponsive('up', 'md')
    const [openDrawer, setOpenDrawer] = useState(isDesktop)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleToggleDrawer = () => {
        setOpenDrawer(prev => !prev)
    }
    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }
    const handleMenuItemClick = () => {
        !isDesktop && handleCloseDrawer()
    }
    const drawerVariant: DrawerProps['variant'] = isDesktop ? 'persistent' : 'temporary'
    return (
        <Main open={openDrawer && isDesktop}>
            <Drawer
                anchor='left'
                variant={drawerVariant}
                open={openDrawer}
                onClose={handleCloseDrawer}
                PaperProps={{
                    sx: {
                        width: drawerWidth,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
            >
                <Toolbar sx={{ height: 55, width: drawerWidth }}>
                    <img
                        loading="eager"
                        src='/assets/Raymond-Arthur_May.svg'
                        alt='loading signature'
                        width='100%'
                    />
                </Toolbar>
                <Divider flexItem light sx={{ borderStyle: 'dotted' }} />
                <MenuList
                    disablePadding
                >
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/home'}
                        to='/authorized/home'
                        component={NavLink}
                        onClick={handleMenuItemClick}
                    >
                        <HomeOutlined />
                        Home
                    </StyledNavMenuItem>
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/schedule'}
                        to='/authorized/schedule'
                        component={NavLink}
                        onClick={handleMenuItemClick}
                    >
                        <CalendarTodayOutlined />
                        Schedule
                    </StyledNavMenuItem>
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/notes'}
                        to='/authorized/notes'
                        component={NavLink}
                        onClick={handleMenuItemClick}
                    >
                        <NoteAltOutlined />
                        Notes
                    </StyledNavMenuItem>
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/tasks'}
                        to='/authorized/tasks'
                        component={NavLink}
                        onClick={handleMenuItemClick}
                    >
                        <TaskOutlined />
                        Tasks
                    </StyledNavMenuItem>
                </MenuList>
            </Drawer>
            <ProfileMenu
                elevation={1}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'avatar-button',
                    sx: { width: 130 }
                }}
            >
                <MenuItem component={NavLink} to='/profile'>
                    <Person />
                    Profile
                </MenuItem>
                <MenuItem divider component={NavLink} to='/profile'>
                    <Settings />
                    Settings
                </MenuItem>
                <MenuItem onClick={async () => await signOut(Auth)}>
                    <Logout />
                    Log Out
                </MenuItem>
            </ProfileMenu>
            <Toolbar
                sx={{
                    justifyContent: 'space-between'
                }}>
                <IconButton onClick={handleToggleDrawer}>
                    {openDrawer
                        ? <MenuOpenOutlined />
                        : <MenuIcon />
                    }
                </IconButton>
                <IconButton
                    onClick={handleClick}
                    id='avatar-button'
                    sx={{
                        width: 45,
                        height: 45
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: deepOrange[400],
                            fontSize: 16,
                        }}
                    >
                        RM
                    </Avatar>
                </IconButton>
            </Toolbar>
            <Container>
                <Outlet />
            </Container>
        </Main>
    )
}

const StyledNavMenuItem = styled((props: MenuItemProps & NavLinkProps) => (
    <MenuItem {...props} />
))(({ theme, selected }) => ({
    height: 55,
    fontSize: 18,
    width: drawerWidth,
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
        marginRight: theme.spacing(1.25),
    },
}))


const ProfileMenu = styled((props: MenuProps) => (
    <Menu
        title='Profile Menu'
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 8,
        marginTop: theme.spacing(.5),
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            ` 
              ${alpha('rgba(0,0,0,.2)', theme.palette.action.selectedOpacity)} 0px 1px 0px 1px,
              ${alpha('rgba(0,0,0,.2)', theme.palette.action.selectedOpacity)} 0px 0px 0px 1px,
              ${alpha('rgba(0,0,0,.2)', theme.palette.action.selectedOpacity)} 0px 10px 15px -3px,
              ${alpha('rgba(0,0,0,.2)', theme.palette.action.selectedOpacity)} 0px 4px 6px -2px
            `,
        '& .MuiMenu-list': {
            padding: '0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
        },
    },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
    }),
}));