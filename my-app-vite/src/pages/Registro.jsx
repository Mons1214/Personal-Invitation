import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Registro({registros, setRegistros}
) {
    const navigate = useNavigate();

    const hadleSeleccion = (eleccion) => {
        //aquí se agrega la eleccion
        const nuevosRegistros = [...registros];
        const ultimo = nuevosRegistros[nuevosRegistros.length - 1];

        console.log(ultimo);

        if (ultimo) {
            ultimo.eleccion = eleccion;
        }
        console.log(ultimo);
        setRegistros(nuevosRegistros);

        //Aquí navegamos a la tercera página ya con el registro
        navigate("/ListaDeInvitados", {state: { registros: nuevosRegistros } });
    };

    return (
        <Box className="App" sx={{
            border: '3px solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "90vh",
            width: "95vw",
            borderRadius: '30px',
            backgroundImage: "url('public/fondo/revelacion.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Box className="Card" sx={{
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'pink',
                padding: 3,
                gap: 2,
            }}>
                <Typography variant='h4'>Selecciona una Opción</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2",
                }}>
                    <Button 
                        variant="contained"  
                        color="secondary" 
                        onClick={() => hadleSeleccion("niña")}
                        sx={{ padding: '10px 20px' }}
                    >
                        niña
                    </Button>
                    <Button 
                        variant="contained" 
                        onClick={() => hadleSeleccion("niño")}
                        sx={{ padding: '10px 20px' }}
                    >
                        niño
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}