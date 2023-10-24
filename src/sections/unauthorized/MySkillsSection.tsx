import { Stack } from "@mui/material";
import { MY_SKILLS } from "../../constents/MY_SKILLS";
import MySkills from "../../components/MySkills";

export function MySkillsSection() {
    return (
        <Stack spacing={2}>
            {MY_SKILLS.map((skill, i) => <MySkills
                align={i % 2
                    ? 'right'
                    : 'left'}
                skill={skill}
                key={skill.id} />
            )}
        </Stack>
    );
}
