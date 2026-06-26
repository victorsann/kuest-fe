import { useLocation } from "react-router-dom";

import { Container } from "./styles";

import TextButton from "../button/text-button";
import SquareButton from "../button/square-button";
import LogoSvg from "../../../assets/svg/images/logo";

import DailyGoal from "../daily-goal";
import Row from "../../components/row_styles";
import HeaderUserInfo from "../header-user-info";

import type { UserModel } from "../../interfaces/models/user-model";

import UserRole from "../../constants/enum/user_role.enum";

import { c_dark_blue, c_grey_six, c_white } from "../../constants/colors";

const Header = () => {

    const location = useLocation();

    const user: UserModel = {
        uid: '',
        name: 'John Doe',
        picture: {
            src: 'https://avatars.githubusercontent.com/u/61476935?v=4&size=64',
        },
        role: UserRole.ADMIN
    }

    const dailyGoal = {
        percentage: 100
    }

    return (
        <Container>
            <LogoSvg />
            {user ? (
                <Row gap="20px">
                    {(user.role == UserRole.STANDARD) ?
                        dailyGoal ? (
                            <DailyGoal
                                action={() => { }}
                                percentage={dailyGoal.percentage}
                            />
                        ) : (
                            <SquareButton
                                text="Meta Diária"
                                color={c_white}
                                isActive={true}
                                onClick={() => { }}
                                backgroundColor={c_dark_blue}
                            />
                        ) : null
                    }
                    <HeaderUserInfo user={user} />
                </Row>
            ) : (
                <Row>
                    <TextButton
                        to="/signin"
                        text="Criar conta"
                        isActive={location.pathname == '/signin'}
                    />
                    <a style={{ color: c_grey_six }}>&ensp;| &ensp;</a>
                    <TextButton
                        to="/login"
                        text="Entrar"
                        isActive={location.pathname == '/login'}
                    />
                </Row>
            )}
        </Container>
    );
}

export default Header;