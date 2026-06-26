import Row from "../../../components/row_styles";
import { c_grey_six } from "../../../constants/colors";

import type { QuestionModel } from "../../../interfaces/models/question-model";
import type { UserModel } from "../../../interfaces/models/user-model";

import UserRole from "../../../constants/enum/user_role.enum";

import DisplayText from "../../display-text";

import { Container } from "./styles";

interface Props { question: QuestionModel, user: UserModel }

const QuestionFooter = (props: Props) => {

    const { question, user } = props;

    const options = [
        {
            title: 'Gabarito',
            action: () => { }
        },
        {
            title: `Comentários (${question.numberOfComments})`,
            action: () => { }
        },
        {
            title: 'Salvar',
            action: () => { }
        },
    ];

    return (
        <Container>
            <Row>
                <Row gap="20px">
                    {options.map((item) =>
                        <DisplayText
                            fontSize="12px"
                            text={item.title}
                            color={c_grey_six}
                            onClick={() => { }}
                        />
                    )}
                </Row>
                {(user.role == UserRole.ADMIN)
                    ? <DisplayText
                        fontSize="12px"
                        text={'Editar'}
                        color={c_grey_six}
                        onClick={() => { }}
                    />
                    : <DisplayText
                        fontSize="12px"
                        text={'Responder'}
                        color={c_grey_six}
                        onClick={() => { }}
                    />
                }
            </Row>
        </Container>
    );
}

export default QuestionFooter;