import { useEffect, useState } from "react";

import { c_dark_blue, c_dark_green, c_dark_red, c_grey_six, c_white } from "../../../constants/colors";

import type { QuestionEntity } from "../../../interfaces/entities/question-entity";
import type { QuestionState } from "../../../interfaces/states/question-state";
import type { OptionEntity } from "../../../interfaces/entities/option-entity";

import QuestionOption from "../question-option";
import SquareButton from "../../button/square-button";

import QuestionTypeEnum from "../../../constants/enum/question-type.enum";
import QuestionAnswerEnum from "../../../constants/enum/question-answer.enum";
import AnswerStatusEnum from "../../../constants/enum/answer-status.enum";

import { Container, Statement, Prompt, OptionsContainer, AnswerStatus, AnswerRow } from "./styles";

interface Props { question: QuestionEntity }

const QuestionBody = (props: Props) => {

    const { question } = props;

    const [questionState, setQuestionState] = useState<QuestionState>({
        ...question,
        answered: false,
        userAnswer: QuestionAnswerEnum.NONE,
        answerStatus: { color: '', statement: '', status: AnswerStatusEnum.NONE },
    });

    const trueOrFalse: Array<OptionEntity> = [
        { key: 'TRUE', statement: 'TRUE' },
        { key: 'FALSE', statement: 'FALSE' },
    ];

    // Logica de atualização da resposta
    useEffect(() => {
        if (questionState.answerStatus.status) setQuestionState((prevState) => ({
            ...prevState,
            answered: true
        }));
    }, [questionState.answerStatus]);

    useEffect(() => setQuestionState((prevState) => ({
        ...prevState,
        answered: false
    })), [questionState.userAnswer]);

    const handleSetUserAnswer = () => {
        if (questionState.userAnswer === questionState.answer) {
            setQuestionState((prevState) => ({
                ...prevState,
                answerStatus: {
                    statement: 'Resposta Certa!',
                    color: c_dark_green,
                    status: AnswerStatusEnum.CORRECT
                }
            }));
        } else {
            setQuestionState((prevState) => ({
                ...prevState,
                answerStatus: {
                    statement: 'Resposta Errada!',
                    color: c_dark_red,
                    status: AnswerStatusEnum.INCORRECT
                }
            }));
        }
    }

    return (
        <Container>
            <Statement fontSize="13px" color={c_grey_six}>{question.statement}</Statement>
            <Prompt fontSize="13px" color={c_grey_six}>{question.prompt}</Prompt>
            <OptionsContainer>
                {(questionState.question_type == QuestionTypeEnum.MULTIPLE_CHOICE)
                    ? question.options.map((item) => <QuestionOption
                        option={item}
                        questionState={questionState}
                        setQuestionState={setQuestionState}
                    />)
                    : trueOrFalse.map((item) => <QuestionOption
                        option={item}
                        questionState={questionState}
                        setQuestionState={setQuestionState}
                    />)
                }
                <AnswerRow>
                    <SquareButton
                        color={c_white}
                        text="Responder"
                        backgroundColor={c_dark_blue}
                        isActive={(questionState.userAnswer == QuestionAnswerEnum.NONE || questionState.answered)
                            ? false
                            : true
                        }
                        onClick={questionState.userAnswer !== QuestionAnswerEnum.NONE
                            ? handleSetUserAnswer
                            : null
                        }
                    />
                    <AnswerStatus color={questionState.answerStatus.color}>
                        {questionState.answerStatus.statement}
                    </AnswerStatus>
                </AnswerRow>
            </OptionsContainer>
        </Container>
    );
}

export default QuestionBody;