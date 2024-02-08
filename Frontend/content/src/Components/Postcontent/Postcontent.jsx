import * as React from 'react';
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Postcontent() {
    const [state, setState] = useState({ title: "", description: "", link: "" });
    const nav = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://evallobackend.onrender.com/content/add`, {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json())
            .then((res) => {
                alert(res.message)
                nav("/")
            })
            .catch(err => console.log(err));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <RssFeedOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Post Your Content
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="title"
                                    name="title"
                                    required
                                    fullWidth
                                    id="title"
                                    label="title"
                                    autoFocus
                                    onChange={(e) => { setState({ ...state, title: e.target.value }) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="description"
                                    name="description"
                                    autoComplete="description"
                                    onChange={(e) => { setState({ ...state, description: e.target.value }) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="link"
                                    label="link"
                                    type="link"
                                    id="link"
                                    autoComplete="link"
                                    onChange={(e) => { setState({ ...state, link: e.target.value }) }}

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            POST
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}