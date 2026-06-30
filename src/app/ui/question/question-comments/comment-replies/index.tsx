import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";
import type { CommentReplyEntity } from "../../../../interfaces/entities/comment-reply-entity";

import CommentInput from "../comment-input";
import CommentReply from "../comment-reply";

import { Container } from "./styles";
import UserRoleEnum from "../../../../constants/enum/user-role.enum";

interface Props {
    user: UserEntity,
    comment: CommentEntity,
    setCommentState: React.Dispatch<React.SetStateAction<CommentEntity>>
}

const CommentReplies = (props: Props) => {

    const { user, comment, setCommentState } = props;

    const handleSetNewReply = (reply: string) => {
        const newReply: CommentReplyEntity = {
            text: reply,
            date: new Date().toISOString(),
            athor: { uid: user.uid, name: user.name, picture: user.picture }
        }
        setCommentState((prevState) => ({
            ...prevState,
            replies: [...comment.replies, newReply],
            numberOfReplies: comment.numberOfReplies + 1
        }));
    }

    return (
        <Container>
            {comment.replies.map((item) => (
                <CommentReply
                    user={user}
                    reply={item}
                    comment={comment}
                    setCommentState={setCommentState}
                />
            ))}
            {(user.role == UserRoleEnum.STANDARD)
                ? <CommentInput
                    user={user}
                    callBack={(_reply) => handleSetNewReply(_reply)}
                />
                : null
            }
        </Container>
    );
}

export default CommentReplies;