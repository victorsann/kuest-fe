import { useState } from "react";
import { c_dark_blue, c_grey_six, c_grey_two, c_white } from "../../../constants/colors";

import TextButton from "../../button/text-button";

import type QuestionActionsEnum from "../../../constants/enum/question-options.enum";
import type { QuestionEntity } from "../../../interfaces/entities/question-entity";

import { AnswerContainer, AnswerKey, Container, Reason } from "./styles";

interface Props {
    question: QuestionEntity,
    setQuestionActionState: React.Dispatch<React.SetStateAction<QuestionActionsEnum>>
}

const QuestionAnswer = (props: Props) => {

    const { question } = props;

    const [answerState, setAnswerState] = useState(question.answer);

    const [liked, setLiked] = useState(true);

    const handleLikeAnswer = () => {
        setAnswerState((prevState) => {
            return {
                ...prevState,
                numberOfLikes: liked ? answerState.numberOfLikes - 1 : answerState.numberOfLikes + 1
            };
        });
        setLiked(!liked)
    }

    return (
        <Container backgroundColor={c_grey_two}>
            <AnswerContainer backgroundColor={c_white}>
                <AnswerKey color={c_grey_six}>
                    Gabarito: {question.answer.key}
                </AnswerKey>
                <Reason color={c_grey_six}>{question.answer.reason}</Reason>
                <TextButton
                    text={`Curtidas (${answerState.numberOfLikes})`}
                    color={(liked) ? c_dark_blue : c_grey_six}
                    onClick={handleLikeAnswer}
                    fontSize="12px"
                />
            </AnswerContainer>

        </Container>
    );
}

export default QuestionAnswer;