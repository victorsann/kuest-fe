import type { UserEntity } from "../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../interfaces/entities/question-entity";

import type { EditQuestionModel } from "../../interfaces/models/endit-question-model";

import QuestionBody from "./question-body";
import QuestionFooter from "./question-footer";
import QuestionHeader from "./questions-header";

import { Container } from "./styles";

interface Props {
    user: UserEntity,
    question: QuestionEntity,
    questionCallBack: (params: EditQuestionModel) => void
}

const Question = (props: Props) => {

    const { user, question, questionCallBack } = props;

    return (
        <Container style={{ overflow: "hidden" }}>
            <QuestionHeader question={question} />
            <QuestionBody question={question} />
            <QuestionFooter
                user={user}
                question={question}
                questionCallBack={questionCallBack}
            />
        </Container>
    );
}

export default Question;