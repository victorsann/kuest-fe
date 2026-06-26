import { Outlet } from "react-router-dom";
import { Container, Body, GlobalScrollbarStyle } from "./styles";

import Header from "../../ui/header/indext";
import Navbar from "../../ui/navbar";

const Baselayout = () => {
    return (
        <Container>
            <Header />
            <Navbar />
            <Body>
                <Outlet />
                <GlobalScrollbarStyle />
            </Body>
        </Container>
    );
}

export default Baselayout;