import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer(props:{ description:string, title:string }) {
    const { description, title } = props;

    return (
        <Box sx={{ bgcolor: 'background.paper'}}>
            <Container maxWidth="lg">
                <Typography align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    align="center"
                    color="text.secondary"
                >{description}
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
