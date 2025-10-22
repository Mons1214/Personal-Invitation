import { Button, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function ListaDeInvitados() {
    const navigate = useNavigate();
    const location = useLocation();

    const registros = location.state?.registros || [];


    return (
        <Box sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "350px",
            gap: "2",
        }}>
            <Typography variant="h4">INVITADOS</Typography>

            <Box>
                {registros.length === 0 ? (
                    <Typography>Sin Registros</Typography>
                ) : (
                    registros.map((reg, index) => (
                        <Typography key={index}>{reg.usuario} - {reg.password}</Typography>
                    ))
                )}
            </Box>
            <Button variant="contained" color="secondary" onClick={() => navigate("/")}
            >
                Inicio
            </Button>
        </Box>
    );
}