import { Frame } from "./styles";

interface Props {
    src: string;
}

const ProfilePicture = (props: Props) => {
    return (
        <Frame src={props.src} />
    );
}

export default ProfilePicture;