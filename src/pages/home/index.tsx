import { v4 as uuidv4 } from 'uuid';
import { Logout, Menu as MenuIcon, Person, Settings } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, Divider, Grid, IconButton, Menu, MenuItem, MenuProps, Stack, Toolbar, Typography, alpha, styled } from "@mui/material";
import { deepOrange, deepPurple, blueGrey, yellow, green, grey } from '@mui/material/colors';
import { parseISO } from 'date-fns';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const colors = [
    deepOrange[400],
    deepPurple[400],
    blueGrey[400],
    yellow[400],
    green[100]
]

export default function Home() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div
            className="home"
            style={{ marginBottom: '25px' }}
        >
            <Toolbar
                sx={{
                    backgroundColor: 'rgba(255,255,255,.8)',
                    justifyContent: 'space-between'
                }}>
                <IconButton>
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
                <StyledMenu
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
                </StyledMenu>
            </Toolbar>
            <Stack direction='row' justifyContent='center'>
                <Stack maxWidth='lg' width='100%' px={2}>
                    <Grid container spacing={2}>
                        {_mock.map((job, i) => (<Grid
                            item
                            display='flex'
                            justifyContent='center'
                            xs={12}
                            md={6}
                            key={job.id}
                        >
                            <Card
                                sx={{
                                    width: 1,
                                    maxWidth: 'sm',
                                    minHeight: 300,
                                    borderRadius: '15px',
                                    bgcolor: colors[i % colors.length]
                                }}
                            >
                                <CardHeader title={job.title} />
                                <CardContent >
                                    <Typography paragraph>
                                        {job.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Stack>
        </div>
    )
}

interface JobI {
    readonly title: string,
    readonly date_applied_ISO: Date,
    readonly description: string,
    readonly id: string,
}

class Job implements JobI {
    public readonly date_applied_ISO: Date;
    constructor(
        public readonly id: string = uuidv4(),
        public readonly title: string,
        public readonly description: string,
        private readonly _date_applied: string,
    ) {
        this.date_applied_ISO = parseISO(this._date_applied)
    }
}

function InstanciateJobFromJSON(json: any) {
    return new Job(
        undefined,
        json.title,
        json.description,
        json.date_applied,
    )
}

const _mock = [
    InstanciateJobFromJSON({ title: 'test', date_applied: new Date().toString(), description: "test" }),
    InstanciateJobFromJSON({ title: 'test1', date_applied: new Date().toString(), description: "test1" }),
    InstanciateJobFromJSON({ title: 'test2', date_applied: new Date().toString(), description: "test2" }),
    InstanciateJobFromJSON({ title: 'test3', date_applied: new Date().toString(), description: "test3" }),
]

const StyledMenu = styled((props: MenuProps) => (
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