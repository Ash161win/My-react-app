import React from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const btnstyle={margin:'20px 10px'}
const EditDetail = () => {
  return (
    <div style={btnstyle}>
      <h2>Edit Customer Details</h2>
      <TextField id= "fid" label="FirstName" placeholder="First Name" variant="outlined" required fullWidth margin='dense'/>
      <TextField id= "lid" label="LastName" placeholder="Last Name" variant="outlined" required fullWidth margin='dense' />
      <TextField id= "Cid" label="ContactNo." placeholder="Mobile Number" variant="outlined" required fullWidth margin='dense' />
      <Button variant="contained" color="primary" style={btnstyle} component={Link} to="/dashboard">
        Save
      </Button>
    </div>
  );
};

export default EditDetail;
