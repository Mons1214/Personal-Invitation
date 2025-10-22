import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function App() {

    
    const navigate = useNavigate();
    const [Usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [registros, setRegistros] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    
    const handleClickShowPassword = () => setShowPassword(prev => !prev);
    const handleMouseShowPassword = (event) => {
        event.preventDefault();
    };

    const handleRegistro = () => {
        if (!Usuario.trim() || !password.trim()) {
            alert('Por favor completa el registro');
            return;
        }

        const nuevosRegistros = [...registros, { usuario: Usuario, password }];
        setRegistros(nuevosRegistros);

        setUsuario("");
        setPassword("");

        navigate("/Registro", { state: { registros: nuevosRegistros } });
    };

    return (
        <Box className="App" sx={{
            width: '100%',
            height: '82vh',
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
                padding: 3,
                gap: 1,
            }}>
                <Box>
                    <Typography variant='h4'>𝔹𝕚𝕖𝕟𝕧𝕖𝕟𝕚𝕕𝕠</Typography>
                </Box>

                <Box sx={{ width: 200 }}>

                    <TextField
                        size="small"
                        id="outlined-controlled"
                        label="Usuario"
                        value={Usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        color='secondary'
                        variant='outlined'
                        sx={{ mb: 1, width: '90%' }}
                        inputProps={{ name: 'usuario' }}
                    />
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FormControl size="small" sx={{ m: 1, width: '67%' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            inputProps={{ name: 'password' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseShowPassword}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>

                <Box>
                    <Button type='button' onClick={handleRegistro}>Registro</Button>
                </Box>

                <Box sx={{ mt: 2 }}>
                    {registros.map((reg, index) => (
                        <Typography key={index}>{reg.usuario} - {reg.password}</Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}