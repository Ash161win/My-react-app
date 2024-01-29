import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useUserContext } from '../context/Usercontext';
import CompanyList from './companylist';
import { Link } from 'react-router-dom';

const btnstyle = { margin: '20px' }
const avatarStyle = { backgroundColor: 'black' }
const txtstyle={ fontSize:'50px', color:'purple'}

function Dboard() {
    const { user } = useUserContext();
    const { username} = user;

    console.log('Username:', username);

    return (
        <Grid style={btnstyle}>
            <Button variant='contained' component={Link} to="/">Back</Button>
            <div>
                <h1 style={txtstyle}>Welcome {username}</h1>
                <CompanyList />
                <h1>DashBoard</h1>
                <h2>Customer's List</h2>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar style={avatarStyle}>
                                <PersonOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Customer 1"
                        /><IconButton component={Link} to="/editdetail" aria-label="more" size="large">
                            <Edit fontSize="inherit" />
                        </IconButton><IconButton aria-label="delete" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar style={avatarStyle}>
                                <PersonOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Customer 2"
                        /><IconButton component={Link} to="/editdetail" aria-label="more" size="large">
                            <Edit fontSize="inherit" />
                        </IconButton><IconButton aria-label="delete" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar style={avatarStyle}>
                                <PersonOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Customer 3"
                        /><IconButton component={Link} to="/editdetail" aria-label="more" size="large">
                            <Edit fontSize="inherit" />
                        </IconButton><IconButton aria-label="delete" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </ListItem>
                </List>
            </div>
            <Fab color="primary" aria-label="add" size='small'>
                <AddIcon />
            </Fab>
        </Grid>
    );
}

export default Dboard;