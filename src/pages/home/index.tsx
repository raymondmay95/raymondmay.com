import { v4 as uuidv4 } from 'uuid';
import { Menu } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { deepOrange, deepPurple, blueGrey, yellow, green } from '@mui/material/colors';
import { parseISO } from 'date-fns';

const colors = [
    deepOrange[400],
    deepPurple[400],
    blueGrey[400],
    yellow[400],
    green[100]
]

export default function Home() {
    return (
        <div
            className="home"
            style={{ marginBottom: '25px' }}
        >
            <Toolbar
                disableGutters
                sx={{
                    backgroundColor: 'rgba(255,255,255,.8)',
                    px: 2,
                }}>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    width='100%'
                >
                    <IconButton>
                        <Menu />
                    </IconButton>
                    <Avatar
                        sx={{
                            bgcolor: deepOrange[400],
                            fontSize: 16
                        }}
                    >
                        RM
                    </Avatar>
                </Stack>
            </Toolbar>
            <Stack direction='row' justifyContent='center' width='100%'>
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