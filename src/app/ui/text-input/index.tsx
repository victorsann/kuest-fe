import { c_grey_six } from "../../constants/colors";
import { Input } from "./styles";

interface Props {
    value: string,
    placeholder: string,
    onChange: ((text: string) => void)
}

const TextInput = (props: Props) => {
    return (
        <Input
            value={props.value}
            color={c_grey_six}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}

export default TextInput;