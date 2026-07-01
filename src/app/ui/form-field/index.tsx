import { c_grey_six } from "../../constants/colors";

import { Container, FormContainer, Label } from "./styles";

interface Props {
    label: string,
    child: any,
    style?: {
        height?: string,
        backgroundColor?: string
    }
}

const FormField = (props: Props) => {

    const { label, child, style } = props;

    return (
        <Container>
            <Label color={c_grey_six}>{label}</Label>
            <FormContainer height={style?.height} backgroundColor={style?.backgroundColor}>
                {child}
            </FormContainer>
        </Container>
    );
}

export default FormField;