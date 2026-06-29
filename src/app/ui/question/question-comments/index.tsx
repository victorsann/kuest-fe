import { useEffect, useState } from "react";
import { c_grey_two } from "../../../constants/colors";

import type QuestionActionsEnum from "../../../constants/enum/question-options.enum";

import type { UserEntity } from "../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../interfaces/entities/comment-entity";
import type { QuestionEntity } from "../../../interfaces/entities/question-entity";
import type { EditCommentModel } from "../../../interfaces/models/edit-comment-model";

import CommentInput from "./comment-input";
import CommentsList from "./comments-list";

import { Container } from "./styles";

interface Props {
    user: UserEntity,
    question: QuestionEntity,
    setQuestionActionState: React.Dispatch<React.SetStateAction<QuestionActionsEnum>>
}

const QuestionComments = (props: Props) => {

    const { user } = props;

    const [comments, setComments] = useState<Array<CommentEntity>>([]);

    useEffect(() => handleGetComments(), []);

    const handleGetComments = () => {
        setComments([
            {
                athor: {
                    uid: '',
                    name: 'John Doe',
                    picture: {
                        src: 'https://avatars.githubusercontent.com/u/61476935?v=4&size=64',
                    },
                },
                date: '2015-03-25T12:00:00Z',
                text: 'Bla bla bla',
                numberOfLikes: 10,
                numberOfReplies: 1,
                replies: [
                    {
                        athor: {
                            uid: '',
                            name: 'John Doe',
                            picture: {
                                src: 'https://avatars.githubusercontent.com/u/61476935?v=4&size=64',
                            }
                        },
                        date: '2015-03-25T12:00:00Z',
                        text: 'Bla bla bla'
                    },

                ],
            },
            {
                athor: {
                    uid: '',
                    name: 'John Doe',
                    picture: {
                        src: 'https://avatars.githubusercontent.com/u/61476935?v=4&size=64',
                    },
                },
                date: '2015-03-25T12:00:00Z',
                text: 'Bla bla bla',
                numberOfLikes: 1,
                numberOfReplies: 1,
                replies: [
                    {
                        athor: {
                            uid: '',
                            name: 'John Doe',
                            picture: {
                                src: 'https://avatars.githubusercontent.com/u/61476935?v=4&size=64',
                            }
                        },
                        date: '2015-03-25T12:00:00Z',
                        text: 'Bla bla bla'
                    }
                ],
            }
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
            <CommentInput user={user} callBack={(_comment) => handleSetNewComment(_comment)} />
        </Container>
    );
}

export default QuestionComments;