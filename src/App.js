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
    <Box className="App" sx={{
      width: '100%',
      height: '96vh',
      border: '3px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box className="Card" sx={{
        border: '3px solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'violet',
      }}>
        <Box>
          <Typography variant='h4'>𝔹𝕚𝕖𝕟𝕧𝕖𝕟𝕚𝕕𝕠</Typography>
        </Box>


        <Box >

          <TextField
            id="outlined-controlled"
            label="Usuario"
            value={''}
            color='secondary'>

          </TextField>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <FormControl sx={{
            m: 1, width: '25ch'
          }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        <Box>
          <Button>Entrar</Button>
          <Button>Registro</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
