
import SectionTitle from "../section-title";

import Question from "../question";
import type { UserEntity } from "../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../interfaces/entities/question-entity";

import { Container, ListContainer } from "./styles";

interface Props { questions: Array<QuestionEntity>, user: UserEntity }

const QuestionsList = (props: Props) => {

    const { questions, user } = props;

    return (
        <Container>
            <SectionTitle
                title="Resultado"
                subtitle="1.000.000 de questões"
            />
            <ListContainer>
                {questions.map((item) => <Question question={item} user={user} />)}
            </ListContainer>
        </Container>
    );
}

export default QuestionsList;