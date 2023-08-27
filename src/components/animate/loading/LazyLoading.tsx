import { Box } from "@mui/material";
import './loading.css'

export default function LazyLoading() {
    return (
        <Box className='loading__Box'>
            <div style={{
                backgroundImage: 'assets/transparent.png',
                width: '86vw',
                height: '86vh',
                backgroundColor: '#999',
                overflow: 'hidden'
            }} />
        </Box>
    );
}
