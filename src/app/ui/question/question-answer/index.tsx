import { c_grey_two } from "../../../constants/colors";
import type QuestionActionsEnum from "../../../constants/enum/question-options.enum";
import { Container } from "./styles";

interface Props {
    setQuestionActionState: React.Dispatch<React.SetStateAction<QuestionActionsEnum>>
}

const QuestionAnswer = (props: Props) => {

    return (
        <Container backgroundColor={c_grey_two}>


        </Container>
    );
}

export default QuestionAnswer;