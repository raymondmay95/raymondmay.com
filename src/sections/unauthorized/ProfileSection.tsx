import { Grid, Stack, Typography } from "@mui/material";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";

/**
 * 
 * @returns Stack containing the Profile Photo, Name, Role/Subheader, Bio, and Contact Links
 */
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
                        <RMAvatar />
                    </Grid>}
                <Grid item>
                    <Stack>
                        <Typography
                            variant="h3"
                            component={motion.h3}
                            {...generateTextAnimation(.5)}
                        >
                            {PROFILE_INFO.title}
                        </Typography>
                        <Typography
                            color='text.disabled'
                            variant="h6"
                            component={motion.h6}
                            {...generateTextAnimation(.5)}>
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
                {...generateTextAnimation(.2)}
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


// ----------------
function generateTextAnimation(opacity: number) {
    const _opacity = opacity ?? .5
    return (
        {
            initial: {
                opacity: _opacity
            },
            animate: {
                opacity: 1,
            },
            transition: {
                duration: .25,
            }
        }
    )
}