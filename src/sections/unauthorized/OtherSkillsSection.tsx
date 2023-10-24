import { Stack } from "@mui/material";
import { SkillsWidget } from "../../components/widget/SkillsWidget";
import { OTHER_SKILLS } from "../../constents/MY_SKILLS";

export function OtherSkillsSection() {
    return (
        <Stack
            direction='row'
            spacing={2}
        >
            <Stack
                direction='column'
                spacing={2}
                width={{
                    xs: '100%',
                    sm: '50%'
                }}>
                {OTHER_SKILLS.filter((_, index) => index % 2 === 0).map((skill) => (
                    <SkillsWidget
                        skillInfo={skill}
                        key={skill.title} />
                ))}
            </Stack>
            <Stack
                direction='column'
                spacing={2}
                width={{
                    xs: '100%',
                    sm: '50%'
                }}>
                {OTHER_SKILLS.filter((_, index) => index % 2 !== 0).map((skill) => (
                    <SkillsWidget
                        skillInfo={skill}
                        key={skill.title} />
                ))}
            </Stack>
        </Stack>
    );
}
