import { useEffect, useState } from "react";
import { c_grey_two } from "../../../constants/colors";

import type QuestionActionsEnum from "../../../constants/enum/question-options.enum";

import type { UserEntity } from "../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../interfaces/entities/comment-entity";

import CommentInput from "./comment-input";
import CommentsList from "./comments-list";

import { Container } from "./styles";

interface Props {
    user: UserEntity,
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
                numberOfLikes: 0,
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

    return (
        <Container backgroundColor={c_grey_two}>
            <CommentsList comments={comments} user={user} />
            <CommentInput user={user} callBack={(c) => console.log(c)} />
        </Container>
    );
}

export default QuestionComments;