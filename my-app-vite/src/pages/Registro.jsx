import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


export default function Registro() {
    const navigate = useNavigate();
    const location = useLocation();

    const registros = location.state?.registros || [];

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "350px",
            gap: "2",
        }}>
            <Box sx={{
                border: "1px solid",
                padding: "3",
                borderRadius: "2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2",
                backgroundColor: "pink",
            }}>
                <Button variant="contained"  color="secondary" onClick={() => navigate("/ListaDeInvitados", { state: { registros } })
                    }>niña</Button>
                <Button variant="contained" onClick={() => navigate("/ListaDeInvitados", { state: { registros } })
                    }>niño</Button>
            </Box>
        </Box>
    );
}