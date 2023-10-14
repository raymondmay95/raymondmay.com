import { Breadcrumbs, Link, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

interface CustomBreadCrumbLink {
    href?: string;
    label: string;
}
export function CustomBreadCrumbs({ links }: { links: CustomBreadCrumbLink[]; }) {
    const last = links[links.length - 1];
    return (
        <StyledBreadcrumbs
            separator='・'
        >
            {links.length > 1
                && links.slice(0, links.length - 1).map(
                    (link) => (
                        <Link
                            underline="hover"
                            component={NavLink}
                            to={link.href || '#'}
                            typography='subtitle1'
                            color='primary.dark'
                        >
                            {link.label}
                        </Link>
                    ))}
            <Typography
                variant="subtitle1"
                sx={{ cursor: 'default' }}
            >
                {last.label}
            </Typography>
        </StyledBreadcrumbs>
    );
}

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    marginBottom: '20px'
}))
