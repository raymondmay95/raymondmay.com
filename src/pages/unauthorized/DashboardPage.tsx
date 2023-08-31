import { Card, CardHeader, Stack, Typography, alpha } from "@mui/material";
import { orange } from "@mui/material/colors";

const quotes = [
    {
        "quote": "Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!",
        "author": "William Hazlitt",
        "category": "happiness"
    }
]

export default function DashboardPage() {
    return (
        <Stack spacing={1}>

            {quotes.map(({ author, quote, category }) => {
                return (
                    <Card sx={{
                        p: 2,
                        bgcolor: alpha(orange[600], .8),
                        color: 'common.white',
                        borderRadius: '20px',
                        maxWidth: {
                            xs: 150,
                            sm: 250
                        }
                    }}>
                        <CardHeader title={category} />
                        <Typography
                            variant="body1"
                            width='100%'>
                            {quote}
                        </Typography>
                        <Stack direction='row' justifyContent='flex-end'>
                            <Typography
                                variant="caption">
                                - {author}
                            </Typography>
                        </Stack>
                    </Card>
                )
            })}


        </Stack>
    )
}