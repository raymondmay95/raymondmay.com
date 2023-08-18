import { Box } from "@mui/material";
import './loading.css'

export default function LazyLoading() {
    return (
        <Box className='loading__Box'>
            <div style={{
                backgroundImage: 'assets/transparent.png',
                width: '100vh',
                height: '100vh',
                backgroundColor: '#999'
            }} />
        </Box>
    );
}
