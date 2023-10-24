import { Grid, Stack, Typography } from "@mui/material";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";

export function ProfileSection() {
    const isMobile = useResponsive('down', 'sm');
    return (
        <Stack>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
            >
                {isMobile &&
                    <Grid item>
                        <RMAvatar sx={{ width: 55, height: 55 }} />
                    </Grid>}
                <Grid item>
                    <Stack>
                        <Typography
                            variant="h4"
                        >
                            {PROFILE_INFO.title}
                        </Typography>
                        <Typography
                            color='text.disabled'
                            variant="subtitle1">
                            {PROFILE_INFO.subheader}
                        </Typography>
                    </Stack>
                </Grid>
                {!isMobile &&
                    <Grid item>
                        <RMAvatar sx={{ width: 55, height: 55 }} />
                    </Grid>}
            </Grid>
            <Typography
                paragraph
                variant="body1"
                sx={{
                    textIndent: 8,
                    py: 1
                }}
            >
                {PROFILE_INFO.content}
            </Typography>
            <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'>
                <ContactActions profileInfo={PROFILE_INFO} />
                <SocialLinks links={PROFILE_INFO.social} />
            </Stack>
        </Stack>
    );
}
