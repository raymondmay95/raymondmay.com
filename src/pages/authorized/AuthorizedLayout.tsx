import { CalendarTodayOutlined, HomeOutlined, Logout, Menu as MenuIcon, NoteAltOutlined, Person, Settings, TaskOutlined } from '@mui/icons-material';
import { Avatar, Container, Divider, Drawer, IconButton, Menu, MenuItem, MenuItemProps, MenuList, MenuProps, Stack, Toolbar, alpha, styled } from "@mui/material";
import { deepOrange, orange } from '@mui/material/colors';
import { useState } from 'react';
import { NavLink, NavLinkProps, Outlet, useLocation } from 'react-router-dom';

const themeColor = orange
const drawerWidth = 150

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
        <>
            <Drawer
                anchor='left'
                variant='temporary'
                open={openDrawer}
                onClose={handleCloseDrawer}
                PaperProps={{
                    sx: {
                        bgcolor: themeColor[50],
                        width: drawerWidth,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
                sx={(theme) => ({
                    bgcolor: alpha(themeColor[800], theme.palette.action.selectedOpacity) + ' !important'
                }
                )}
            >
                <Toolbar disableGutters>
                    <img
                        loading="eager"
                        src='/assets/Raymond-Arthur_May.svg'
                        alt='loading signature'
                        width='auto'
                        height={75}
                    />
                </Toolbar>
                <Divider flexItem light />
                <MenuList
                    disablePadding
                    sx={{
                        backgroundColor: themeColor[50],
                    }}
                >
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/home'}
                        to='/authorized/home'
                        component={NavLink}
                        onClick={handleCloseDrawer}
                    >
                        <HomeOutlined />
                        Home
                    </StyledNavMenuItem>
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/schedule'}
                        to='/authorized/schedule'
                        component={NavLink}
                        onClick={handleCloseDrawer}
                    >
                        <CalendarTodayOutlined />
                        Schedule
                    </StyledNavMenuItem>
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/notes'}
                        to='/authorized/notes'
                        component={NavLink}
                        onClick={handleCloseDrawer}
                    >
                        <NoteAltOutlined />
                        Notes
                    </StyledNavMenuItem>
                    <StyledNavMenuItem
                        selected={pathname === '/authorized/tasks'}
                        to='/authorized/tasks'
                        component={NavLink}
                        onClick={handleCloseDrawer}
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
                    sx: {
                        backgroundColor: themeColor[50],
                    }
                }}
            >
                <Stack spacing={.5} p={.75}>
                    <MenuItem component={NavLink} to='/profile'>
                        <Person />
                        Profile
                    </MenuItem>
                    <MenuItem component={NavLink} to='/profile'>
                        <Settings />
                        Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem component={NavLink} to='/logout'>
                        <Logout />
                        Log Out
                    </MenuItem>
                </Stack>
            </ProfileMenu>
            <Stack spacing={3}>
                <Toolbar
                    sx={{
                        backgroundColor: alpha(themeColor[50], .2),
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
                <Container sx={{ margin: 4 }}>
                    <Outlet />
                </Container>
            </Stack>
        </>
    )
}

const StyledNavMenuItem = styled((props: MenuItemProps & NavLinkProps) => (
    <MenuItem {...props} />
))(({ theme, selected }) => ({
    height: 55,
    fontSize: 18,
    width: drawerWidth,
    backgroundColor: selected
        ? alpha(
            themeColor[800],
            theme.palette.action.selectedOpacity,
        ) + ' !important'
        : '',
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
    '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
    },
    '&$selected': {
        backgroundColor: alpha(
            themeColor[800],
            theme.palette.action.selectedOpacity,
        ) + ' !important',
    },
    '&:active': {
        backgroundColor: alpha(
            themeColor[800],
            theme.palette.action.selectedOpacity,
        ),
    },
    '&:hover': {
        backgroundColor: alpha(
            themeColor[800],
            theme.palette.action.selectedOpacity,
        ),
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
              ${alpha(themeColor[400], theme.palette.action.selectedOpacity)} 0px 1px 0px 1px,
              ${alpha(themeColor[800], theme.palette.action.selectedOpacity)} 0px 0px 0px 1px,
              ${alpha(themeColor[400], theme.palette.action.selectedOpacity)} 0px 10px 15px -3px,
              ${alpha(themeColor[800], theme.palette.action.selectedOpacity)} 0px 4px 6px -2px
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
            '&:active': {
                backgroundColor: alpha(
                    themeColor[800],
                    theme.palette.action.selectedOpacity,
                ),
            },
            '&:hover': {
                backgroundColor: alpha(
                    themeColor[800],
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));