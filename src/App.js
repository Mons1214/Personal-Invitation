import './App.css';
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box className="App">
      <Box className="Card" sx={{ }}> 
        <Box>
          <Typography variant='h4'>Bienvenido </Typography>
        </Box>
          /*Usuario*/
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField label="Usuario" variant="standard" />
        </Box>

        /*Contraseña*/
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
          <FilledInput 
          id="filled-adornment-password" 
          type={showPassword ? 'text' : 'password'} 
          endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}> 
              {showPassword ? <VisibilityOff /> :<Visibility />}
            </IconButton>
          </InputAdornment>
        } 
      />
        </FormControl>
        </Box>

        /*Botones*/
        <Box>
          <Button>Entrar</Button>
          <Button>Registro</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
