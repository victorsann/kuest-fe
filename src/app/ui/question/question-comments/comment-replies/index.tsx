import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";

import CommentInput from "../comment-input";
import CommentReply from "../comment-reply";

import { Container } from "./styles";

interface Props {
    user: UserEntity,
    comment: CommentEntity,
    setComment: React.Dispatch<React.SetStateAction<CommentEntity>>
}

const CommentReplies = (props: Props) => {

    const { comment, setComment, user } = props;

    return (
        <Container>
            {comment.replies.map((item) => (
                <CommentReply
                    user={user}
                    reply={item}
                    comment={comment}
                    setComment={setComment}
                />
            ))}
            <CommentInput user={user} callBack={(c) => console.log(c)} />
        </Container>
    );
}

export default CommentReplies;