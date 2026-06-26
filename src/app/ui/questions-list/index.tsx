
import Question from "../question";
import SectionTitle from "../section-title";

import type { UserModel } from "../../interfaces/models/user-model";
import type { QuestionModel } from "../../interfaces/models/question-model";

import { Container, ListContainer } from "./styles";

interface Props { questions: Array<QuestionModel>, user: UserModel }

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