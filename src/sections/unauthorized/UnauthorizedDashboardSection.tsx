import { Grid } from "@mui/material";
import { SkillsWidget } from "../../components/widget/SkillsWidget";
import { ProfileWidget } from "../../components/widget/ProfileWidget";
import { MY_SKILLS } from "../../constents/MY_SKILLS";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import ReduxLibraryDescrition from "./ReduxLibraryDescrition";

export function UnauthorizedDashboardWidgetSection() {

    return (
        <Grid container spacing={4}>
            <Grid item sm={12}>
                <ProfileWidget profileInfo={PROFILE_INFO} />
            </Grid>
            {MY_SKILLS.map((skill) => (
                <Grid
                    item
                    xs={12}
                    sm={4}
                    key={skill.id + '__Grid_Item'}
                >
                    <SkillsWidget
                        skillInfo={skill}
                        key={skill.title}
                    />
                </Grid>
            ))}
            <Grid item sm={12}>
                <ReduxLibraryDescrition />
            </Grid>
        </Grid >
    );
}

