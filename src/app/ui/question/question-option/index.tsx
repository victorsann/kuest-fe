import { useEffect, useState } from "react";

import QuestionTypeEnum from "../../../constants/enum/question-type.enum";
import AnswerStatusEnum from "../../../constants/enum/answer-status.enum";
import QuestionAnswerKeyEnum from "../../../constants/enum/question-answer-key.enum";

import ScissorsSvg from "../../../../assets/svg/icons/scissors";

import type { OptionState } from "../../../interfaces/states/options-state";
import type { QuestionOptionEntity } from "../../../interfaces/entities/question-option-entity";

import type { QuestionState } from "../../../interfaces/states/question-state";

import { c_dark_green, c_grey_four, c_grey_six, c_grey_three, c_white } from "../../../constants/colors";
import { AnswerCheckBox, AnswerKey, OptionContainer, OptionRemoved, OptionRemover, OptionRow, OptionStatement, RightAnswer } from "./styles";

interface Props {
    option: QuestionOptionEntity,
    questionState: QuestionState,
    setQuestionState: React.Dispatch<React.SetStateAction<QuestionState>>
}

const QuestionOption = (props: Props) => {

    const { option, questionState, setQuestionState } = props;

    const [optionState, setOptionState] = useState<OptionState>({
        ...option,
        eliminated: false,
        showRightAnswer: false
    });

    // Logica de atualização da resposta
    useEffect(() => {
        if (questionState.answerStatus.status == AnswerStatusEnum.INCORRECT)
            setOptionState((prevState) => ({
                ...prevState,
                showRightAnswer: true
            }));
    }, [questionState.answerStatus]);

    useEffect(() => {
        setOptionState((prevState) => ({ ...prevState, showRightAnswer: false }));
    }, [questionState.userAnswer]);

    //
    const handleSetQuestionState = () => {
        setQuestionState(
            (prevState) => ({
                ...prevState,
                userAnswer: option.key as QuestionAnswerKeyEnum
            })
        );
        setOptionState((prevState) => ({ ...prevState, eliminated: false }));
    }

    const handleSetEliminated = () => {
        setOptionState((prevState) => ({
            ...prevState,
            eliminated: !optionState.eliminated
        }));
    }

    return (
        <OptionRow>
            <OptionContainer onClick={handleSetQuestionState}>
                {questionState.question_type == QuestionTypeEnum.MULTIPLE_CHOICE
                    ? <AnswerKey
                        color={option.key == questionState.userAnswer
                            ? c_white
                            : c_grey_six
                        }
                        backgroundColor={option.key == questionState.userAnswer
                            ? c_grey_six
                            : c_white
                        }
                    >
                        {option.key}
                    </AnswerKey>
                    : <AnswerCheckBox
                        color={option.key == questionState.userAnswer
                            ? c_white
                            : c_grey_six
                        }
                        backgroundColor={option.key == questionState.userAnswer
                            ? c_grey_six
                            : c_white
                        }
                    />
                }
                <OptionStatement
                    fontSize="13px"
                    color={optionState.eliminated ? c_grey_four : c_grey_six}
                    textDecoration={optionState.eliminated ? 'line-through' : 'none'}
                >
                    {(questionState.question_type == QuestionTypeEnum.MULTIPLE_CHOICE)
                        ? option.statement
                        : option.statement == QuestionAnswerKeyEnum.TRUE
                            ? 'Certo'
                            : 'Errado'
                    }
                </OptionStatement>
                {(
                    optionState.showRightAnswer &&
                    option.key == questionState.answer.key &&
                    questionState.answerStatus?.status == AnswerStatusEnum.INCORRECT
                )
                    ? <RightAnswer color={c_dark_green}>Gabarito</RightAnswer>
                    : null
                }
            </OptionContainer>
            {(questionState.question_type == QuestionTypeEnum.MULTIPLE_CHOICE)
                ? (optionState.key !== questionState.answer.key || questionState.userAnswer !== questionState.answer.key && !questionState.answered)
                    ? (!optionState.eliminated)
                        ? <OptionRemover
                            onClick={handleSetEliminated}
                            backgroundColor={c_grey_three}
                            opacity={(optionState.eliminated) ? '100%' : '0%'}
                        >
                            <ScissorsSvg color={c_grey_six} />
                        </OptionRemover>
                        : <OptionRemoved
                            onClick={handleSetEliminated}
                            backgroundColor={c_grey_three}
                        >
                            <ScissorsSvg color={c_white} />
                        </OptionRemoved>
                    : null
                : null
            }
        </OptionRow>
    );
}

export default QuestionOption;
