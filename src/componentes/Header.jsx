import { AppBar, Container, Button, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import { React } from "react";



const Header = () => {

    //Lista de paginas a referenciar en el menu

    const pages = [
        { field: 'Home', path: '/home', icono: "home" },
        { field: 'Conocenos', path: '/conocenos', icono: "face" },
        { field: 'Reservar Turno', path: '/reservarTurno', icono: "pets" },
        { field: 'Tienda', path: '/tienda', icono: "store" },
        { field: 'Carrito', path: '/carrito', icono: "add_shopping_cart" },
    ];

    return (
        <AppBar
            position="static"
            sx={{
                borderRadius: "16px"
            }}
        >
            <Container
                align="center"
                variant="container"
                color="white"
            >
                {pages.map(page =>
                    <Link
                        to={page.path} >
                        <Button
                            variant="contained"
                            color="inherit"
                            size="medium"
                            sx={{
                                margin: "8px",
                                padding: "8px",
                                borderRadius: "16px"
                            }}
                        >
                            {page.field}
                            {<Icon
                                fontSize="medium"
                                color="info"
                            >
                                {page.icono}
                            </Icon>}
                        </Button>
                    </Link>
                )}
            </Container>
        </AppBar>

    );
}
export default Header;