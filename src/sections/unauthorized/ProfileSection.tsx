import { Grid, Stack, Typography } from "@mui/material";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";
import { widgetAnimation, widgetItemAnimation } from "../../components/widget/animationConfig";
import { varFade } from "../../components/animate";

export function ProfileSection() {
    const isMobile = useResponsive('down', 'md');
    return (
        <Stack spacing={2}>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
                spacing={1}
            >
                {isMobile &&
                    <Grid item>
                        <RMAvatar sx={{ width: 75, height: 75 }} />
                    </Grid>}
                <Grid item>
                    <Stack>
                        <Typography
                            component={motion.h3}
                            {...varFade({ durationIn: .25 }).in}
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
                component={motion.p}
                {...widgetAnimation}
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
