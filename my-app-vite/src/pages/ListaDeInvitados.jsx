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
        <Box sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "90vw",
            backgroundImage: "url('public/fondo/azul.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Typography variant="h4">INVITADOS</Typography>

            <TableContainer 
                component={Paper} 
                sx={{
                    mt: 2,
                    maxHeight: 300,
                    width: 350,
                    overflowY: 'auto',
                    borderRadius: '2px',
                 }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
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
            <Box sx={{ mt: 2 }}>
                <Typography color="violet">Girls: {totalGirls}</Typography>
                <Typography color="blue">Boys: {totalBoys}</Typography>
            </Box>
            <Button variant="contained" color="" onClick={() => navigate("/")}
            >
                Inicio
            </Button>
        </Box>
    );
}