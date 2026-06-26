import { useLocation } from "react-router-dom";
import { Container, NavItem } from "./styles";

interface MenuItem {
    title: string,
    path: string,
}

const menu: Array<MenuItem> = [
    { title: 'Cursos', path: '/courses' },
    { title: 'Bancas', path: '/boards' },
    { title: 'Questões', path: '/' },
    { title: 'Provas', path: '/exams' },
    { title: 'Matérias', path: '/subjects' },
]

const Navbar = () => {

    const location = useLocation();

    return (
        <Container>
            {menu.map((item) =>
                <NavItem to={item.path} isActive={item.path == location.pathname}>
                    {item.title}
                </NavItem>
            )}
        </Container>
    );
}

export default Navbar;