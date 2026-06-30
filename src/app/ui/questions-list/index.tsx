import SectionTitle from "../section-title";

import Question from "../question";

import { c_dark_blue, c_grey_six } from "../../constants/colors";

import type { UserEntity } from "../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../interfaces/entities/question-entity";

import { Container, Length, ListContainer, NoResultsFound } from "./styles";

interface Props {
    user: UserEntity,
    questions: Array<QuestionEntity>
}

const QuestionsList = (props: Props) => {

    const { user, questions } = props;

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
                        (item) => <Question user={user} question={item} />
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