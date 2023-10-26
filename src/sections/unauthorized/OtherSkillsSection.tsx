import { Grid, Stack } from "@mui/material";
import { SkillsWidget } from "../../components/widget/SkillsWidget";
import { OTHER_SKILLS } from "../../constents/MY_SKILLS";

export function OtherSkillsSection() {
    return (
        <Grid item container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Stack spacing={3}>
                    {OTHER_SKILLS.filter((_, index) => index % 2 === 0).map((skill) => (
                        <SkillsWidget
                            skillInfo={skill}
                            key={skill.title} />
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack spacing={3}>
                    {OTHER_SKILLS.filter((_, index) => index % 2 !== 0).map((skill) => (
                        <SkillsWidget
                            skillInfo={skill}
                            key={skill.title} />
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
}
