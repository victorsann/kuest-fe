import DisplayText from "../../display-text";
import Row from "../../../components/row_styles";
import { c_dark_blue, c_grey_six } from "../../../constants/colors";

import type { QuestionEntity } from "../../../interfaces/entities/question-entity";

import { Container, IdContainer, MetaDataContainer, MetaDataTitle } from "./styles";

interface Props { question: QuestionEntity }

const QuestionHeader = (props: Props) => {

    const { question } = props;

    return (
        <Container>
            <IdContainer>
                <DisplayText fontSize="12px" onClick={() => { }} color={c_dark_blue} text={question.uuid} />
            </IdContainer>
            <MetaDataContainer>
                <Row gap="2px">
                    <MetaDataTitle fontSize="12px" color={c_grey_six}>Banca:</MetaDataTitle>
                    <DisplayText
                        fontSize="12px"
                        onClick={() => { }}
                        color={c_dark_blue}
                        text={question.examining_board}
                    />
                </Row>
                <Row gap="2px">
                    <MetaDataTitle fontSize="12px" color={c_grey_six}>Prova:</MetaDataTitle>
                    <DisplayText
                        fontSize="12px"
                        onClick={() => { }}
                        color={c_dark_blue}
                        text={question.exam}
                    />
                </Row>
                <Row gap="2px">
                    <MetaDataTitle fontSize="12px" color={c_grey_six}>Matéria:</MetaDataTitle>
                    <DisplayText
                        fontSize="12px"
                        onClick={() => { }}
                        color={c_dark_blue}
                        text={question.subject.title}
                    />
                </Row>
                <Row gap="2px">
                    <MetaDataTitle fontSize="12px" color={c_grey_six}>Assunto:</MetaDataTitle>
                    <DisplayText
                        fontSize="12px"
                        onClick={() => { }}
                        color={c_dark_blue}
                        text={question.topic.title}
                    />
                </Row>
            </MetaDataContainer>
        </Container>
    );
}

export default QuestionHeader;