import { TouchableArea } from "./styles";

interface Props {
    text: string,
    color?: string,
    fontSize?: string,
    inActive?: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const TextButton = (props: Props) => {
    return (
        <TouchableArea
            color={props.color}
            onClick={props.onClick}
            fontSize={props.fontSize}
            isActive={props.inActive}
        >
            {props.text}
        </TouchableArea>
    );
};

export default TextButton;