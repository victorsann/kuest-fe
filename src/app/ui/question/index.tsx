import type { QuestionEntity } from "../../interfaces/entities/question-entity";
import type { UserEntity } from "../../interfaces/entities/user-entity";

import QuestionBody from "./question-body";
import QuestionFooter from "./question-footer";
import QuestionHeader from "./questions-header";

import { Container } from "./styles";

interface Props { question: QuestionEntity, user: UserEntity }

const Question = (props: Props) => {

    const { question, user } = props;

    return (
        <Container style={{ overflow: "hidden" }}>
            <QuestionHeader question={question} />
            <QuestionBody question={question} />
            <QuestionFooter question={question} user={user} />
        </Container>
    );
}

export default Question;