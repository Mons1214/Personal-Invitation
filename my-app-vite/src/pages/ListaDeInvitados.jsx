import { Button, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function ListaDeInvitados() {
    const navigate = useNavigate();
    const location = useLocation();

    const registros = location.state?.registros || [];


    //Contamos cuántos niños y niñas hay
    const totalBoys = registros.filter((reg) => reg.eleccion === "niño").length;
    const totalGirls = registros.filter((reg) => reg.eleccion === "niña").length;

    return (
        <Box className="App" sx={{
            border: '3px solid',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: "90vh",
            width: "95vw",
            borderRadius: '30px',
            backgroundImage: "url('public/fondo/azul.jpg')",
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
                backgroundColor: 'mediumpurple',
                padding: 3,
                gap: 2,
                maxHeight: '80vh',
                overflowY: 'auto',
            }}>
                <Typography variant="h4">INVITADOS</Typography>

                <TableContainer 
                    component={Paper} 
                    sx={{
                        maxHeight: 300,
                        width: 350,
                        overflowY: 'auto',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                     }}
                >
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableCell><strong>Nombre</strong></TableCell>
                                <TableCell><strong>Apellido</strong></TableCell>
                                <TableCell><strong>Elección</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {registros.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={3} align="center">Sin registros</TableCell>
                                </TableRow>
                            ) : (
                                registros.map((reg, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{reg.usuario}</TableCell>
                                        <TableCell>{reg.Apellido}</TableCell>
                                        <TableCell>{reg.eleccion}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>


                {/*Mostramos contadores */}
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Girls: {totalGirls}</Typography>
                    <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Boys: {totalBoys}</Typography>
                </Box>
                <Button 
                    variant="contained" 
                    onClick={() => navigate("/")}
                    sx={{ backgroundColor: 'violet', color: 'white' }}
                >
                    Inicio
                </Button>
            </Box>
        </Box>
    );
}