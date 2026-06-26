import { TouchableArea } from "./styles";

interface Props {
    text: string,
    action?: Function,
    to: string,
    isActive?: boolean
}

const TextButton = (props: Props) => {
    return (
        <TouchableArea to={props.to} isActive={props.isActive}>
            {props.text}
        </TouchableArea>
    );
};

export default TextButton;