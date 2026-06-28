import { TouchableArea } from "./styles";

interface Props {
    text: string,
    color?: string,
    fontSize?: string
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const TextButton = (props: Props) => {
    return (
        <TouchableArea onClick={props.onClick} fontSize={props.fontSize} color={props.color}>
            {props.text}
        </TouchableArea>
    );
};

export default TextButton;