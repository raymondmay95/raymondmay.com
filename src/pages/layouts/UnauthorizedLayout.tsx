import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function UnauthorizedLayout() {
    return (
        <Box
            width='100%'
            height='100%'
            display='flex'
            justifyContent='center'
        >

            <Container maxWidth='md' sx={{ py: 4 }}>
                <Outlet />
            </Container>
        </Box>
    )
}