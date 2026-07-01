
import Column from "../../components/column_styles";
import Row from "../../components/row_styles";

import { c_grey_six } from "../../constants/colors";
import { Subtitle, Title } from "./styles";

interface Props {
    title: string,
    subtitle?: string,
    buttons?: React.JSX.Element
}

const PageTitle = (props: Props) => {
    return (
        <Column gap="20px">
            <Row>
                <Title color={c_grey_six}>{props.title}</Title>{props.buttons}
            </Row>
            <Subtitle color={c_grey_six}>{props.subtitle}</Subtitle>
        </Column>
    );
};

export default PageTitle;