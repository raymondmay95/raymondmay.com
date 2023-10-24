import { Divider, IconButton, Stack, Typography, alpha } from "@mui/material";
import { Iconify } from "../../components/Iconify";
import { SkillInfo } from "../../models/Widget/SkillInfo";

const Color: Record<SkillInfo['id'], string> = {
    ReactJS_Skill: '#4483c9',
    Redux_Skill: '#764ABC',
    Typescript_Skill: '#3077C6'
}

export default function MySkills({
    skill,
    align
}:
    {
        skill: SkillInfo,
        align: 'left' | 'right'
    }) {

    const color = Color[skill.id] || 'inherit'
    const justifyContent = align === 'left'
        ? 'flex-start'
        : 'flex-end'

    return (
        <Stack
            spacing={1}
        >
            <Stack
                direction='row'
                alignItems='flex-end'
                justifyContent={justifyContent}>
                <Stack
                    direction='row'
                    spacing={2}
                    alignItems='center'
                    justifyContent={justifyContent}
                >
                    <Iconify icon={skill.icon} />
                    <Typography
                        variant="h4"
                        color={color}>
                        {skill.title}
                    </Typography>
                </Stack>
                <IconButton
                    sx={{ ml: .5 }}
                    href={skill.navUrl}
                >
                    <Iconify
                        width={16}
                        height={16}
                        opacity={.2}
                        color="text.disabled"
                        icon='gridicons:external'
                    />
                </IconButton>
            </Stack>
            <Typography
                paragraph
                variant="body1"
                color={color}
                textAlign={align}
                sx={{ textIndent: 8 }}
            >
                {skill.content}
            </Typography>
            <Stack justifyContent={justifyContent} direction='row'>
                <Divider
                    flexItem
                    sx={{
                        width: '80%',
                        ...(color !== 'inherit'
                            && {
                            borderColor: alpha(color, .2)
                        })
                    }}
                />
            </Stack>
        </Stack>
    );
}
