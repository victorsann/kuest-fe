import { useEffect, useState } from "react";
import { c_dark_blue, c_dark_red, c_grey_six, c_white } from "../../../../constants/colors";

import CommentReplies from "../comment-replies";
import Row from "../../../../components/row_styles";
import TextButton from "../../../button/text-button";

import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";

import UserRoleEnum from "../../../../constants/enum/user-role.enum";
import TextSyleEnum from "../../../../constants/enum/text-style.enum";
import CommentOptionsEnum from "../../../../constants/enum/comments-options-enum";

import type { TextStyleModel } from "../../../../interfaces/models/text-style-model";
import type { EditCommentModel } from "../../../../interfaces/models/edit-comment-model";
import type { CommentOptionModel } from "../../../../interfaces/models/comments-option-model";

import TextInput from "../../../text-input";

import { CommentDate, CommentText, Container, ProfilePicture, TextStyleOption, UserName } from "./styles";

interface Props {
    user: UserEntity,
    comment: CommentEntity,
    callBack: (comment: EditCommentModel) => void
}

const Comment = (props: Props) => {

    const { user, comment, callBack } = props;

    const [commentState, setCommentState] = useState<CommentEntity>(props.comment);
    const [showReplies, setShowReplies] = useState(false);

    // Used to update comments after editing
    useEffect(() => {
        setCommentState(props.comment);
    }, [comment]);

    const commentOptions: Array<CommentOptionModel> = [
        {
            title: `Curtidas (${commentState.numberOfLikes})`,
            type: CommentOptionsEnum.LIKE,
            isActive: (user.role == UserRoleEnum.STANDARD) ? true : false,
            action: () => setCommentState((prevState) => ({
                ...prevState,
                numberOfLikes: (commentState.numberOfLikes > props.comment.numberOfLikes)
                    ? commentState.numberOfLikes - 1
                    : commentState.numberOfLikes + 1
            })),
        },
        {
            title: `Respostas (${commentState.numberOfReplies})`,
            type: CommentOptionsEnum.REPLIES,
            isActive: true,
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
    const [editedComment, setEditedComment] = useState(commentState.text);

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

    // Retaled to editing comment

    const [commentChanged, setCommentChanged] = useState(false);

    useEffect(() => editedComment.trim() != ''
        ? setCommentChanged(true)
        : setCommentChanged(false), [editedComment]
    );

    const handleEditComment = () => {
        callBack({ comment: comment, editedComment: editedComment });
        setIsEditing(false);
        setTextStyle([]);
    }

    const handleCancelEditing = () => {
        setEditedComment(comment.text);
        setIsEditing(false);
        setTextStyle([]);
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
                        <ProfilePicture src={comment.athor.picture.src} />
                        <UserName color={c_grey_six}>{comment.athor.name}</UserName>
                    </Row>
                    <CommentDate color={c_grey_six}>{comment.date}</CommentDate>
                </Row>
                {(isEditing)
                    ? <TextInput
                        value={editedComment}
                        placeholder="Escreva um comentário..."
                        onChange={(_text) => setEditedComment(_text)}
                    />
                    : <CommentText color={c_grey_six}>{commentState.text}</CommentText>
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
                                    fontSize="12px"
                                    text={item.title}
                                    inActive={item.isActive}
                                    color={(item.type == commentOptionState)
                                        ? c_dark_blue : c_grey_six
                                    }
                                    onClick={() => (item.isActive)
                                        ? handleQuestionOption(item)
                                        : null
                                    }
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
                                onClick={handleCancelEditing}
                            />
                            <TextButton
                                fontSize="12px"
                                text={'Salvar'}
                                color={c_grey_six}
                                inActive={commentChanged}
                                onClick={(commentChanged) ? handleEditComment : () => { }}
                            />
                        </Row>
                        : <Row gap="10px">
                            {commentState.athor.uid == user.uid || user.role == UserRoleEnum.ADMIN
                                ? <TextButton
                                    fontSize="12px"
                                    text={'Remover'}
                                    color={c_dark_red}
                                    onClick={() => { }}
                                />
                                : null
                            }
                            {user.role == UserRoleEnum.STANDARD
                                ? <TextButton
                                    fontSize="12px"
                                    color={c_grey_six}
                                    text={commentState.athor.uid == user.uid ? 'Editar' : 'Reportar'}
                                    onClick={() => commentState.athor.uid == user.uid
                                        ? setIsEditing(!isEditing) : null
                                    }
                                />
                                : null
                            }
                        </Row>
                    }
                </Row>
            </Container>
            {(showReplies)
                ? <CommentReplies
                    user={user}
                    comment={commentState}
                    setCommentState={setCommentState}
                />
                : null
            }
        </>
    );
}

export default Comment;