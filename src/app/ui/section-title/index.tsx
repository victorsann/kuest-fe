
import Row from "../../components/row_styles";

import { c_grey_six } from "../../constants/colors";
import { Subtitle, Title } from "./styles";

interface Props {
    title: string,
    subtitle?: string
}

const SectionTitle = (props: Props) => {
    return (
        <Row>
            <Title color={c_grey_six}>{props.title}</Title>
            <Subtitle color={c_grey_six}>{props.subtitle}</Subtitle>
        </Row>
    );
};

export default SectionTitle;