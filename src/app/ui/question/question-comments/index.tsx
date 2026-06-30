import { useEffect, useState } from "react";
import { c_grey_two } from "../../../constants/colors";

import type QuestionActionsEnum from "../../../constants/enum/question-options.enum";
import type { EditQuestionModel } from "../../../interfaces/models/endit-question-model";

import type { UserEntity } from "../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../interfaces/entities/comment-entity";
import type { QuestionEntity } from "../../../interfaces/entities/question-entity";
import type { EditCommentModel } from "../../../interfaces/models/edit-comment-model";

import CommentInput from "./comment-input";
import CommentsList from "./comments-list";

import { Container } from "./styles";
import UserRoleEnum from "../../../constants/enum/user-role.enum";

interface Props {
    user: UserEntity,
    question: QuestionEntity,
    questionCallBack: (params: EditQuestionModel) => void
    setQuestionActionState: React.Dispatch<React.SetStateAction<QuestionActionsEnum>>
}

const QuestionComments = (props: Props) => {

    const { user, question, questionCallBack } = props;

    const [comments, setComments] = useState<Array<CommentEntity>>([]);

    useEffect(() => handleGetComments(), []);

    const handleGetComments = () => {
        setComments([
            {
                athor: {
                    uid: '1',
                    name: 'Kid Named Finger',
                    picture: {
                        src: 'https://i.scdn.co/image/ab67616d00001e020b6deb6b039d4481823b3c8d'
                    },
                },
                date: '2015-03-25T12:00:00Z',
                text: 'Bla bla bla',
                numberOfLikes: 0,
                numberOfReplies: 1,
                replies: [
                    {
                        athor: {
                            uid: '1',
                            name: 'Kid Named Finger',
                            picture: {
                                src: 'https://i.scdn.co/image/ab67616d00001e020b6deb6b039d4481823b3c8d'
                            }
                        },
                        date: '2015-03-25T12:00:00Z',
                        text: 'Bla bla bla'
                    },

                ],
            },
        ]);
    }

    const handleSetNewComment = (comment: string) => {
        const newComment: CommentEntity = {
            text: comment,
            athor: {
                uid: user.uid,
                name: user.name,
                picture: user.picture
            },
            date: new Date().toISOString(),
            numberOfLikes: 0,
            numberOfReplies: 0,
            replies: [],
        }
        setComments([...comments, newComment]);
        questionCallBack({ question: question }); // update question
    }

    const handleEditComment = (params: EditCommentModel) => {
        const index = comments.indexOf(
            params.comment
        );
        const editedCommentContent: CommentEntity = {
            athor: params.comment.athor,
            date: params.comment.date,
            numberOfLikes: params.comment.numberOfLikes,
            numberOfReplies: params.comment.numberOfReplies,
            replies: params.comment.replies,
            text: params.editedComment
        }
        setComments(comments.with(index, editedCommentContent));
    }

    return (
        <Container backgroundColor={c_grey_two}>
            <CommentsList
                user={user}
                comments={comments}
                callBack={(_comment) => handleEditComment(_comment)}
            />
            {(user.role == UserRoleEnum.STANDARD)
                ? <CommentInput
                    user={user}
                    callBack={(_reply) => handleSetNewComment(_reply)}
                />
                : null
            }
        </Container>
    );
}

export default QuestionComments;