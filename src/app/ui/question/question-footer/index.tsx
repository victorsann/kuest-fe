import { useState } from "react";
import Row from "../../../components/row_styles";
import { c_dark_blue, c_grey_six } from "../../../constants/colors";

import type { QuestionEntity } from "../../../interfaces/entities/question-entity";
import type { UserEntity } from "../../../interfaces/entities/user-entity";

import type { QuestionOptionModel } from "../../../interfaces/models/question-option-model";

import QuestionOptionsEnum from "../../../constants/enum/question-options.enum";
import UserRoleEnum from "../../../constants/enum/user-role.enum";

import TextButton from "../../button/text-button";

import QuestionAnswer from "../question-answer";
import QuestionComments from "../question-comments";

import { Container, FooterOption, FooterOptionLabel } from "./styles";

interface Props { question: QuestionEntity, user: UserEntity }

const QuestionFooter = (props: Props) => {

    const { question, user } = props;

    const questionOptions: Array<QuestionOptionModel> = [
        {
            title: 'Gabarito',
            type: QuestionOptionsEnum.ANSWER,
            action: () => { },
        },
        {
            title: `Comentários (${question.numberOfComments})`,
            type: QuestionOptionsEnum.COMMENTS,
            action: () => { }
        }
    ];

    const [questionOptionState, setQuestionOptionState] = useState<QuestionOptionsEnum>(
        QuestionOptionsEnum.NONE
    );

    const handleQuestionOption = (item: QuestionOptionModel) => {
        setQuestionOptionState((item.type == questionOptionState)
            ? QuestionOptionsEnum.NONE : item.type
        );
    }

    return (
        <>
            <Container>
                <Row>
                    <Row>
                        {questionOptions.map((item) =>
                            <FooterOption onClick={() => handleQuestionOption(item)}>
                                <FooterOptionLabel
                                    fontSize="12px"
                                    color={(item.type == questionOptionState)
                                        ? c_dark_blue : c_grey_six
                                    }>
                                    {item.title}
                                </FooterOptionLabel>
                            </FooterOption>
                        )}
                    </Row>
                    {(user.role == UserRoleEnum.ADMIN)
                        ? <TextButton
                            fontSize="12px"
                            text={'Editar'}
                            color={c_grey_six}
                            onClick={() => { }}
                        />
                        : <TextButton
                            fontSize="12px"
                            text={'Responder'}
                            color={c_grey_six}
                            onClick={() => { }}
                        />
                    }
                </Row>
            </Container>
            {(questionOptionState == QuestionOptionsEnum.COMMENTS)
                ? <QuestionComments
                    user={user}
                    question={question}
                    setQuestionActionState={setQuestionOptionState}
                />
                : null
            }
            {(questionOptionState == QuestionOptionsEnum.ANSWER)
                ? <QuestionAnswer
                    question={question}
                    setQuestionActionState={setQuestionOptionState}
                />
                : null
            }
        </>
    );
}

export default QuestionFooter;