import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


export default function Registro() {
    const navigate = useNavigate();
    const location = useLocation();

    const registros = location.state?.registros || [];

    const hadleSeleccion = (eleccion) => {
        //aquí se agrega la eleccion
        const nuevosRegistros = [...registros];
        const ultimo = nuevosRegistros[nuevosRegistros.length - 1];

        if (ultimo) {
            ultimo.eleccion = eleccion; //"niño" o "niña"
        }

        //Aquí navegamos a la tercera página ya con el registro
        navigate("/ListaDeInvitados", {state: { registros: nuevosRegistros } });
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "87vh",
            width: "85vw",
            backgroundImage: "url('public/fondo/revelacion.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
                <Button variant="contained"  color="secondary" onClick={() => hadleSeleccion("niña")}>
                    niña
                    </Button>
                <Button variant="contained" onClick={() => hadleSeleccion("niño")}>
                    niño
                    </Button>
            </Box>
        </Box>
    );
}