import { TouchableArea } from "./styles";

interface Props {
    text: string,
    color: string,
    onClick?: any,
    isActive?: boolean,
    icon?: React.JSX.Element,
    borderColor?: string,
    backgroundColor: string
}

const SquareButton = (props: Props) => {

    const { onClick, isActive } = props;

    return (
        <TouchableArea
            color={props.color}
            onClick={onClick}
            isActive={isActive}
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
        >
            {props.text}
            {props.icon}
        </TouchableArea>
    );
};

export default SquareButton;