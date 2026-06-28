import { c_grey_six, c_grey_two, c_white } from "../../../../constants/colors";

import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";

import Comment from "../comment";
import SquareButton from "../../../button/square-button";

import { Container } from "./styles";

interface Props {
    user: UserEntity,
    comments: Array<CommentEntity>
}

const CommentsList = (props: Props) => {

    const { comments, user } = props;

    return (
        <Container backgroundColor={c_grey_two}>
            {comments.map((item) => <Comment comment={item} user={user} />)}
            {comments.length > 10
                ? <SquareButton
                    isActive={true}
                    color={c_grey_six}
                    onClick={() => { }}
                    text={'Carregar mais'}
                    backgroundColor={c_white}
                    borderColor={'transparent'}
                />
                : null
            }
        </Container>
    );
}

export default CommentsList;