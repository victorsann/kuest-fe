
import SectionTitle from "../section-title";

import Question from "../question";
import type { UserEntity } from "../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../interfaces/entities/question-entity";

import type { EditQuestionModel } from "../../interfaces/models/endit-question-model";

import { Container, Length, ListContainer, NoResultsFound } from "./styles";
import { c_dark_blue, c_grey_six } from "../../constants/colors";

interface Props {
    user: UserEntity,
    questions: Array<QuestionEntity>,
    questionCallBack: (params: EditQuestionModel) => void
}

const QuestionsList = (props: Props) => {

    const { user, questions, questionCallBack } = props;

    return (
        <Container>
            <SectionTitle
                title="Resultado"
                children={[
                    <Length color={c_dark_blue}>{questions.length}</Length>,
                    <a> questões</a>
                ]}
            />
            <ListContainer>
                {(questions.length > 0)
                    ? questions.map(
                        (item) => <Question
                            user={user}
                            question={item}
                            questionCallBack={questionCallBack}
                        />
                    )
                    : <NoResultsFound color={c_grey_six}>
                        Nenhuma questão encontrada
                    </NoResultsFound>
                }
            </ListContainer>
        </Container>
    );
}

export default QuestionsList;