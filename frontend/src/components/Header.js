import React, { useState } from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom';
const Header = () => {
    const [value, setvalue] = useState();
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant='h3'>Mern Auth</Typography>
                <Box sx={{marginLeft:'auto'}}>
                    <Tabs indicatorColor='secondary' onChange={(e,val)=>setvalue(val)} value={value} textColor='inherit'>
                        <Tab to="/login" LinkComponent={Link} label = "Login"/>
                        <Tab to="/signup" LinkComponent={Link} label = "Signup" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header