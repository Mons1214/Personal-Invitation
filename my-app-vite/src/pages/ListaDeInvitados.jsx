import { Button, Box, Typography } from "@mui/material";
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

            <Box>
                {registros.length === 0 ? (
                    <Typography>Sin Registros</Typography>
                ) : (
                    registros.map((reg, index) => (
                        <Typography key={index}>
                            {reg.usuario} - {reg.Apellido} - {reg.eleccion}
                            </Typography>
                    ))
                )}
            </Box>

            {/*Mostramos contadores */}
            <Box sx={{ mt: 2 }}>
                <Typography>Girls: {totalGirls}</Typography>
                <Typography>Boys: {totalBoys}</Typography>
            </Box>
            <Button variant="contained" color="" onClick={() => navigate("/")}
            >
                Inicio
            </Button>
        </Box>
    );
}