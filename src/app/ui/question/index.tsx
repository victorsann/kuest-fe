import { useState } from "react";

import type { UserEntity } from "../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../interfaces/entities/question-entity";

import type { EditQuestionModel } from "../../interfaces/models/endit-question-model";

import QuestionFieldsEnum from "../../constants/enum/question-fields-enum";

import QuestionBody from "./question-body";
import QuestionFooter from "./question-footer";
import QuestionHeader from "./questions-header";

import { Container } from "./styles";

interface Props {
    user: UserEntity,
    question: QuestionEntity,
}

const Question = (props: Props) => {

    const { user, question } = props;

    const [questionState, setQuestionState] = useState<QuestionEntity>(question);

    const handleUpdateQuetion = (params: EditQuestionModel) => {
        if (params.field == QuestionFieldsEnum.NUMBER_OF_COMMENTS) {
            setQuestionState((prevState) => ({
                ...prevState,
                numberOfComments: questionState.numberOfComments + 1
            }));
        } else {

        }
    }

    return (
        <Container style={{ overflow: "hidden" }}>
            <QuestionHeader question={question} />
            <QuestionBody question={question} />
            <QuestionFooter
                user={user}
                question={questionState}
                questionCallBack={handleUpdateQuetion}
            />
        </Container>
    );
}

export default Question;