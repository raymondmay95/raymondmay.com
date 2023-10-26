import { Card, CardContent, CardHeader, List, ListItem, ListItemText } from "@mui/material";
import { TimelineEvent } from "../../components/TimelineEvent";

export function SkillsContentViewArea({ selectedTimelineEvent }: { selectedTimelineEvent: TimelineEvent; }) {
    return (
        <Card
            sx={{
                maxWidth: { xs: 340, sm: '100%' },
                borderRadius: '15px'
            }}
            elevation={0}
        >
            <CardHeader
                title={selectedTimelineEvent.company}
                subheader={selectedTimelineEvent.formatted_date_range}
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'subtitle1' }}
            />
            <CardContent
                sx={{ pt: 0 }}
            >
                <List>
                    {selectedTimelineEvent.content_list.map((item, i) => (
                        <ListItem
                            disableGutters
                            disablePadding
                            key={`${selectedTimelineEvent.id}_content_${i}`}
                        >
                            <ListItemText
                                primary={`${i + 1}.`}
                                secondary={item}
                                primaryTypographyProps={{
                                    variant: 'body1',
                                    pr: '1rem',
                                    whiteSpace: 'nowrap',
                                    color: 'text.disabled'
                                }}
                                secondaryTypographyProps={{
                                    variant: 'body1',
                                }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
