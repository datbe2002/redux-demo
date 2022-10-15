import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AddUser() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography
                        variant='h6'
                        color='textSecondary'
                        component='h2'
                        gutterBottom>
                        Create new user
                    </Typography>

                    <form noValidate autoComplete='off'>
                        <TextField
                            label='Name'
                            variant='outlined'
                            color='secondary'></TextField>

                    </form>
                    <Button
                        onClick={() => alert('You clicked me ')}
                        type='submit'
                        color='secondary'
                        variant='contained'
                        endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
                    >ADD</Button>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>




        </Container>
    )
}
