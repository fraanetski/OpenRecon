import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import {Header} from "./components/Header"
import {Container, Typography, Button, Box, Grid, Card} from '@mui/material'

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#06BA00',
        dark: '#212121',
        main: '#026e1f',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fff',
        dark: '#fff',
        main: '#fff',
      },
    },
    typography: {
      fontFamily: 'sans-serif',
    },
  });


function Contact() {

    return (
        <div>
        <Box sx={{flexGrow: 1,
}}>
        <ThemeProvider theme={theme}>
            <Container maxWidth={false}
            disableGutters={true}
            sx={{ backgroundColor: 'primary.dark',
                textAlign: 'center',
                flex: 1,
                minHeight: '100vh'
            }}>
            <Container maxWidth='xl' disableGutters={true}>
            <Header />

            <Box sx={{
                verticalAlign: 'middle',
                display: 'block',
                padding: 3
            }}>

            <Card sx={{
              backgroundColor: '#2b2b2b',
            }}>

            <br/>
            <Typography color="white">
            Please email fraanetski@protonmail.com or DM on Twitter @fraanetski
            </Typography>
            <br/>


            <br/>
            </Card>
            </Box>

            </Container>
            </Container>
        </ThemeProvider>
        </Box>
        </div>
    )
}

export default Contact;