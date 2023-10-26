import { Grid, Stack } from "@mui/material";
import { motion } from 'framer-motion'
import { SkillsWidget } from "../../components/widget/SkillsWidget";
import { OTHER_SKILLS } from "../../constents/MY_SKILLS";

export function OtherSkillsSection() {
    return (
        <Grid item container spacing={3}>
            <Grid item xs={12} sm={6}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: .25, duration: .25, stiffness: 600 }}
                >
                    <Stack spacing={3}>
                        {OTHER_SKILLS.filter((_, index) => index % 2 === 0).map((skill) => (
                            <SkillsWidget
                                skillInfo={skill}
                                key={skill.title} />
                        ))}
                    </Stack>
                </motion.div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: .25, duration: .25, stiffness: 600 }}
                >
                    <Stack spacing={3}>
                        {OTHER_SKILLS.filter((_, index) => index % 2 !== 0).map((skill) => (
                            <SkillsWidget
                                skillInfo={skill}
                                key={skill.title} />
                        ))}
                    </Stack>
                </motion.div>
            </Grid>
        </Grid>
    );
}
