import { useEffect, useState } from "react";

import Row from "../../../components/row_styles";

import { c_dark_blue, c_dark_red, c_grey_six, c_grey_two, c_white } from "../../../constants/colors";

import TextInput from "../../text-input";
import TextButton from "../../button/text-button";

import UserRoleEnum from "../../../constants/enum/user-role.enum";
import type QuestionActionsEnum from "../../../constants/enum/question-options.enum";

import type { UserEntity } from "../../../interfaces/entities/user-entity";
import type { QuestionEntity } from "../../../interfaces/entities/question-entity";

import { AnswerContainer, AnswerKey, Container, Reason } from "./styles";

interface Props {
    user: UserEntity,
    question: QuestionEntity,
    setQuestionActionState: React.Dispatch<React.SetStateAction<QuestionActionsEnum>>
}

const QuestionAnswer = (props: Props) => {

    const { user, question } = props;

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

    // Retaled to editing reason

    const [editedReason, setEditedReason] = useState(question.answer.reason);
    const [reasonChanged, setReasonChanged] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => editedReason.trim() != ''
        ? setReasonChanged(true)
        : setReasonChanged(false), [editedReason]
    );

    const handleEditReason = () => {
        setAnswerState((prevState) => ({
            ...prevState,
            reason: editedReason
        }));
        setIsEditing(false);
    }

    const handleCancelEditing = () => {
        setEditedReason(question.answer.reason);
        setIsEditing(false);
    }

    return (
        <Container backgroundColor={c_grey_two}>
            <AnswerContainer backgroundColor={c_white}>
                <AnswerKey color={c_grey_six}>
                    Gabarito: {question.answer.key}
                </AnswerKey>
                {(isEditing)
                    ? <TextInput
                        value={editedReason}
                        placeholder="Escreva um comentário..."
                        onChange={(_text) => setEditedReason(_text)}
                    />
                    : <Reason color={c_grey_six}>{answerState.reason}</Reason>
                }
                {(isEditing)
                    ? <Row gap="10px" justifyContent={'flex-end'}>
                        <TextButton
                            fontSize="12px"
                            text={'Cancelar'}
                            color={c_dark_red}
                            onClick={handleCancelEditing}
                        />
                        <TextButton
                            fontSize="12px"
                            text={'Salvar'}
                            color={c_grey_six}
                            inActive={reasonChanged}
                            onClick={(reasonChanged) ? handleEditReason : () => { }}
                        />
                    </Row>
                    : <Row>
                        <TextButton
                            text={`Curtidas (${answerState.numberOfLikes})`}
                            color={(liked) ? c_dark_blue : c_grey_six}
                            onClick={handleLikeAnswer}
                            fontSize="12px"
                        />
                        {(user.role == UserRoleEnum.ADMIN)
                            ? <TextButton
                                text={'Editar'}
                                fontSize="12px"
                                color={c_grey_six}
                                onClick={() => setIsEditing(!isEditing)}
                            />
                            : null
                        }
                    </Row>
                }
            </AnswerContainer>
        </Container>
    );
}

export default QuestionAnswer;