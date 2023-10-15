import { Stack, Typography } from "@mui/material";
import { Iconify } from "../../components/Iconify";
import { ReduxDescription } from "../../constents/MY_SKILLS";

const REDUX_COLOR = '#764ABC'

export default function ReduxLibraryDescrition() {
    return (
        <Stack
            marginTop={4}
            spacing={1}
        >
            <Stack
                direction='row'
                spacing={1}
                alignItems='center'
            >
                <Iconify icon='devicon:redux' />
                <Typography
                    variant="h4"
                    color={REDUX_COLOR}>
                    Redux
                </Typography>
            </Stack>
            <Typography
                paragraph
                variant="body1"
                color={REDUX_COLOR}
                sx={{ textIndent: 8 }}
            >
                {ReduxDescription}
            </Typography>
        </Stack>
    );
}
