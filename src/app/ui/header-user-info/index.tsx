import Row from "../../components/row_styles";
import { c_grey_six } from "../../constants/colors";
import type { UserEntity } from "../../interfaces/entities/user-entity";

import { ProfilePicture, UserName } from "./styles";

interface Props { user: UserEntity }

const HeaderUserInfo = (props: Props) => {
    return (
        <Row onClick={() => { }} gap={'10px'} cursor={'pointer'}>
            <ProfilePicture src={props.user.picture.src} />
            <UserName color={c_grey_six}>{props.user.name}</UserName>
        </Row>
    );
}

export default HeaderUserInfo;