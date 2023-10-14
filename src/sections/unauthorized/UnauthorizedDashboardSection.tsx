import { Grid } from "@mui/material";
import { SkillsWidget } from "../../components/SkillsWidget";
import { InfoWidgit } from "../../components/InfoWidgit";
import { MY_SKILLS } from "../../constents/MY_SKILLS";

export function UnauthorizedDashboardSection() {
    return (
        <Grid container spacing={4}>
            <Grid item sm={12}>
                <InfoWidgit />
            </Grid>
            {MY_SKILLS.map((skill) => (
                <Grid
                    item
                    sm={4}
                    key={skill.ariaLabel}
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

