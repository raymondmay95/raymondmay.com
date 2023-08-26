import { Logout, Menu as MenuIcon, Person, Settings } from '@mui/icons-material';
import { Avatar, Drawer, IconButton, Menu, MenuItem, MenuList, MenuProps, Stack, Toolbar, alpha, styled } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';


export default function AuthorizedLayout() {
    const { pathname } = useLocation()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenDrawer = () => {
        setOpenDrawer(true)
    }
    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }
    return (
        <Stack>
            <Drawer
                anchor='left'
                variant='temporary'
                open={openDrawer}
                onClose={handleCloseDrawer}
            >
                <Toolbar disableGutters sx={{ pl: 2 }}>
                    <img
                        loading="eager"
                        src='assets/Raymond-Arthur_May.svg'
                        alt='loading signature'
                        width='auto'
                        height={75}
                    />
                </Toolbar>
                <MenuList
                    sx={{
                        width: 200,
                        height: 55
                    }}
                >
                    <MenuItem
                        selected={pathname === '/authorized/home'}
                        to='/authorized/home'
                        component={NavLink}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        selected={pathname === '/authorized/schedule'}
                        to='/authorized/schedule'
                        component={NavLink}
                    >
                        Schedule
                    </MenuItem>
                    <MenuItem
                        selected={pathname === '/authorized/notes'}
                        to='/authorized/notes'
                        component={NavLink}
                    >
                        Notes
                    </MenuItem>
                    <MenuItem
                        selected={pathname === '/authorized/tasks'}
                        to='/authorized/tasks'
                        component={NavLink}
                    >
                        Tasks
                    </MenuItem>
                </MenuList>
            </Drawer>

            <Toolbar
                sx={{
                    backgroundColor: 'rgba(255,255,255,.8)',
                    justifyContent: 'space-between'
                }}>
                <IconButton onClick={handleOpenDrawer}>
                    <MenuIcon />
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

            <ProfileMenu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'avatar-button',
                }}
            >
                <Stack spacing={1} my={1}>
                    <MenuItem component={NavLink} to='/profile'>
                        <Person />
                        Profile
                    </MenuItem>
                    <MenuItem component={NavLink} to='/profile'>
                        <Settings />
                        Settings
                    </MenuItem>
                    <MenuItem component={NavLink} to='/logout'>
                        <Logout />
                        Log Out
                    </MenuItem>
                </Stack>
            </ProfileMenu>
            <Outlet />
        </Stack>
    )
}


const ProfileMenu = styled((props: MenuProps) => (
    <Menu
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
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 140,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));