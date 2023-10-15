import { Divider, Grid, Stack, Typography } from "@mui/material";
import { SkillsWidget } from "../../components/widget/SkillsWidget";
// import { ProfileWidget } from "../../components/widget/ProfileWidget";
import { MY_SKILLS } from "../../constents/MY_SKILLS";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import ReduxLibraryDescrition from "./ReduxLibraryDescrition";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";

export function UnauthorizedDashboardWidgetSection() {
    const isMobile = useResponsive('down', 'sm')

    return (
        <Grid container spacing={4}>
            <Grid
                item
                sm={12}
            >
                <Stack>
                    <Grid
                        container
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        {isMobile &&
                            <Grid item>
                                <RMAvatar sx={{ width: 55, height: 55 }} />
                            </Grid>
                        }
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
                            </Grid>
                        }
                    </Grid>
                    <Typography
                        paragraph
                        variant="body1"
                        sx={{ textIndent: 8 }}
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
                {/* <ProfileWidget profileInfo={PROFILE_INFO} /> */}
                <Divider flexItem sx={{ mt: 1 }} />
            </Grid>
            {MY_SKILLS.map((skill) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={skill.id + '__Grid_Item'}
                >
                    <SkillsWidget
                        skillInfo={skill}
                        key={skill.title}
                        divider
                    />
                </Grid>
            ))}
            <Grid item sm={12}>
                <ReduxLibraryDescrition />
            </Grid>
        </Grid >
    );
}

