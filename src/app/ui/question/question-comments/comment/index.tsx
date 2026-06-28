import { useState } from "react";
import { c_dark_blue, c_dark_red, c_grey_six, c_white } from "../../../../constants/colors";

import CommentReplies from "../comment-replies";
import Row from "../../../../components/row_styles";
import TextButton from "../../../button/text-button";

import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";

import CommentOptionsEnum from "../../../../constants/enum/comments-options-enum";

import type { CommentOptionModel } from "../../../../interfaces/models/comments-option-model";

import { CommentDate, CommentText, Container, ProfilePicture, TextStyleOption, UserName } from "./styles";
import TextInput from "../../../text-input";
import TextSyleEnum from "../../../../constants/enum/text-style.enum";
import type { TextStyleModel } from "../../../../interfaces/models/text-style-model";

interface Props { comment: CommentEntity, user: UserEntity }

const Comment = (props: Props) => {

    const { user } = props;

    const [comment, setComment] = useState(props.comment);
    const [showReplies, setShowReplies] = useState(false);

    const commentOptions: Array<CommentOptionModel> = [
        {
            title: `Curtidas (${comment.numberOfLikes})`,
            type: CommentOptionsEnum.LIKE,
            action: () => setComment((prevState) => ({
                ...prevState,
                numberOfLikes: (comment.numberOfLikes > props.comment.numberOfLikes)
                    ? comment.numberOfLikes - 1
                    : comment.numberOfLikes + 1
            })),
        },
        {
            title: `Respostas (${comment.numberOfReplies})`,
            type: CommentOptionsEnum.REPLIES,
            action: () => setShowReplies(!showReplies)
        }
    ];

    const [commentOptionState, setCommentOptionState] = useState<CommentOptionsEnum>(
        CommentOptionsEnum.NONE
    );

    const handleQuestionOption = (item: CommentOptionModel) => {
        setCommentOptionState((item.type == commentOptionState)
            ? CommentOptionsEnum.NONE
            : item.type
        );
        item.action();
    }

    // Editing related

    const [isEditing, setIsEditing] = useState(false);
    const [newComment, setNewComment] = useState(comment.text);

    const [textStyle, setTextStyle] = useState<Array<TextSyleEnum>>([]);

    const textStyleOptions: Array<TextStyleModel> = [
        {
            text: 'B',
            style: TextSyleEnum.BOLD,
            action: () => handleSelectTextStyle(TextSyleEnum.BOLD),
        },
        {
            text: 'I',
            style: TextSyleEnum.ITALIC,
            action: () => handleSelectTextStyle(TextSyleEnum.ITALIC),
        },
        {
            text: 'U',
            style: TextSyleEnum.UNDERLINE,
            action: () => handleSelectTextStyle(TextSyleEnum.UNDERLINE),
        },
    ];

    const handleSelectTextStyle = (style: TextSyleEnum) => {
        setTextStyle(textStyle.includes(style)
            ? textStyle.filter(value => value != style)
            : [...textStyle, style]
        );
    }

    const handleSetNewComment = () => {
        setIsEditing(false);
    }

    return (
        <>
            <Container backgroundColor={c_white}>
                <Row>
                    <Row
                        gap={'10px'}
                        cursor={'pointer'}
                        onClick={() => { }}
                        justifyContent={'flex-start'}
                    >
                        <ProfilePicture src={props.user.picture.src} />
                        <UserName color={c_grey_six}>{props.user.name}</UserName>
                    </Row>
                    <CommentDate color={c_grey_six}>{props.comment.date}</CommentDate>
                </Row>
                {(isEditing)
                    ? <TextInput
                        value={newComment}
                        placeholder="Escreva um comentário..."
                        onChange={(_text) => setNewComment(_text)}
                    />
                    : <CommentText color={c_grey_six}>{comment.text}</CommentText>
                }
                <Row>
                    {(isEditing)
                        ? <Row gap="10px">
                            {textStyleOptions.map((item) => (
                                <TextStyleOption
                                    onClick={item.action}
                                    fontStyle={item.style}
                                    fontWeight={item.style}
                                    textDecoration={item.style}
                                    color={(item.style === textStyle[textStyle.indexOf(item.style)])
                                        ? c_dark_blue : c_grey_six
                                    }
                                >
                                    {item.text}
                                </TextStyleOption>
                            ))}
                        </Row>
                        : <Row gap="10px">
                            {commentOptions.map((item) =>
                                <TextButton
                                    text={item.title}
                                    fontSize="12px"
                                    color={(item.type == commentOptionState)
                                        ? c_dark_blue : c_grey_six
                                    }
                                    onClick={() => handleQuestionOption(item)}
                                />
                            )}
                        </Row>
                    }
                    {(isEditing)
                        ? <Row gap="10px">
                            <TextButton
                                fontSize="12px"
                                text={'Cancelar'}
                                color={c_dark_red}
                                onClick={() => setIsEditing(false)}
                            />
                            <TextButton
                                fontSize="12px"
                                text={'Salvar'}
                                color={c_grey_six}
                                onClick={handleSetNewComment}
                            />
                        </Row>
                        : <TextButton
                            fontSize="12px"
                            color={c_grey_six}
                            text={comment.athor.uid == user.uid ? 'Editar' : 'Reportar'}
                            onClick={() => comment.athor.uid == user.uid ? setIsEditing(!isEditing) : null}
                        />
                    }
                </Row>
            </Container>
            {(showReplies)
                ? <CommentReplies user={user} comment={comment} setComment={setComment} />
                : null
            }
        </>
    );
}

export default Comment;