import type { QuestionModel } from "../../interfaces/models/question-model";
import type { UserModel } from "../../interfaces/models/user-model";

import QuestionBody from "./question-body";
import QuestionFooter from "./question-footer";
import QuestionHeader from "./questions-header";

import { Container } from "./styles";

interface Props { question: QuestionModel, user: UserModel }

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