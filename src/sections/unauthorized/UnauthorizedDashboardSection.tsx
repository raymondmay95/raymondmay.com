import { Divider, Grid, Stack, Typography } from "@mui/material";
import { SkillsWidget } from "../../components/widget/SkillsWidget";
// import { ProfileWidget } from "../../components/widget/ProfileWidget";
import { MY_SKILLS, OTHER_SKILLS } from "../../constents/MY_SKILLS";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";
import MySkills from "./MySkills";

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
                {/* <ProfileWidget profileInfo={PROFILE_INFO} /> */}
                <Divider flexItem sx={{ mt: 1 }} />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Typography
                    variant="h5"
                    color='text.disabled'>
                    My Skills
                </Typography>
            </Grid>
            {MY_SKILLS.map((skill, i) =>
                <Grid
                    item
                    mt={1}
                    xs={12}
                >
                    <MySkills
                        align={
                            i % 2
                                ? 'right'
                                : 'left'}
                        skill={skill}
                        key={skill.id}
                    />
                </Grid>
            )}
            <Grid item sm={12}>
                <Typography
                    variant="h5"
                    color='text.disabled'>
                    More Skills
                </Typography>
            </Grid>
            {OTHER_SKILLS.map((skill) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={3}
                    key={skill.id + '__Grid_Item'}
                >
                    <SkillsWidget
                        skillInfo={skill}
                        key={skill.title}
                    />
                </Grid>
            ))}
        </Grid >
    );
}

