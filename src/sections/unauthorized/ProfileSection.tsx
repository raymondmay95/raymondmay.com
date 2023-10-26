import { Grid, Stack, Typography } from "@mui/material";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";
import { TextAnimate } from "../../components/animate";

export function ProfileSection() {
    const isMobile = useResponsive('down', 'sm');
    return (
        <Stack spacing={2}>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
            >
                {isMobile &&
                    <Grid item>
                        <RMAvatar sx={{ width: 75, height: 75 }} />
                    </Grid>}
                <Grid item>
                    <Stack>
                        <Typography
                            variant="h3"
                        >
                            {PROFILE_INFO.title}
                        </Typography>
                        <Typography
                            color='text.disabled'
                            variant="h6">
                            {PROFILE_INFO.subheader}
                        </Typography>
                    </Stack>
                </Grid>
                {!isMobile &&
                    <Grid item>
                        <RMAvatar sx={{ width: 75, height: 75 }} />
                    </Grid>}
            </Grid>
            <Typography
                paragraph
                sx={{
                    textIndent: '1.2rem',
                    lineHeight: '26px',
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
