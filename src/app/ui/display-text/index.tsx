import { HiperLink } from "./styles";

interface Props {
    text: string,
    color?: string,
    fontSize?: string,
    onClick: Function
}

const DisplayText = (props: Props) => {
    return (
        <HiperLink onClick={() => props.onClick} fontSize={props.fontSize} color={props.color}>
            {props.text}
        </HiperLink>
    );
}

export default DisplayText;