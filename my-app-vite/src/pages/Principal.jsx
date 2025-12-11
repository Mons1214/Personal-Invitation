import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function App({ registros, setRegistros }) {

    const navigate = useNavigate();

    const [ newRegistroForm1, setNewRegistroForm1 ] = useState(
        { 
            usuario: '',
            apellido: ''
        }
    );

    //Formulario 1
    const [Usuario, setUsuario] = useState('');
    const [Apellido, setApellido] = useState('');

    //Formulario 2
    const [usuarioInvitado, setUsuarioInvitado] = useState('');
    const [apellidoInvitado, setApellidoInvitado] = useState('');


    //Guardar y navegar
    const handleRegistro = () => {
        if (!Usuario.trim() || !Apellido.trim()) {
            alert('Por favor completa el registro');
            return;
        }


        const nuevosRegistros = [...registros, { usuario: Usuario, Apellido: Apellido }];
        setRegistros(nuevosRegistros);

        setUsuario("");
        setApellido("");

        navigate("/Registro", { state: { registros: nuevosRegistros } });
    };


    //Guardar sin navegar
    const handleNuevaEntrada = () => {
        if (!usuarioInvitado.trim() || !apellidoInvitado.trim()) {
            alert('Completa el registro antes de continuar');
            return;
        }

        const registrosNuevos = [...registros, { usuario: usuarioInvitado, Apellido: apellidoInvitado }];
        setRegistros(registrosNuevos);

        setUsuarioInvitado("");
        setApellidoInvitados("");

        navigate("/ListaDeInvitados", { state: { registros: registrosNuevos } });
    };

    return (
        <Box name='container' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: "90vh",
            width: "95vw",
            backgroundImage: 'url(/fondo/poohcita.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
        }}>
            <Typography variant='h2' sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Bienvenidos</Typography>
            
            <Box sx={{
                display: 'flex',
                gap: 3,
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                <Box className="Card" sx={{
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'violet',
                    padding: 3,
                    gap: 1,
                    minWidth: '300px',
                }}>

                    <Typography variant='h4'>Registro</Typography>

                <TextField
                    size="small"
                    label="Nombre"
                    value={Usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    sx={{ mb: 1, width: '90%' }}
                />

                <TextField
                    size="small"
                    label="Apellido"
                    value={Apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    sx={{ mb: 1, width: '90%' }}
                />
                <Button variant='outlined' type='button' onClick={handleRegistro}>Registro</Button>

                </Box>
                <Box className="Card" sx={{
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'mediumpurple',
                    padding: 3,
                    gap: 1,
                    minWidth: '300px',
                }}>

                    <Typography variant='h4'>Login</Typography>

                    <TextField
                        size="small"
                        label="Nombre"
                        value={usuarioInvitado}
                        onChange={(e) => setUsuarioInvitado(e.target.value)}
                        sx={{ mb: 1, width: '90%' }}
                    />

                    <TextField
                        size="small"
                        label="Apellido"
                        value={apellidoInvitado}
                        onChange={(e) => setApellidoInvitado(e.target.value)}
                        sx={{ mb: 1, width: '90%' }}
                    />

                    <Button variant='outlined' type='button' onClick={handleNuevaEntrada}>Login</Button>
                </Box>
            </Box>
        </Box>
    );
}