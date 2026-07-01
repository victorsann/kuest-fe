import { useEffect, useState } from "react";
import { c_dark_blue, c_dark_red, c_grey_six, c_white } from "../../../../constants/colors";

import TextInput from "../../../text-input";
import Row from "../../../../components/row_styles";
import TextButton from "../../../button/text-button";

import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";

import TextSyleEnum from "../../../../constants/enum/text-style.enum";
import UserRoleEnum from "../../../../constants/enum/user-role.enum";

import { formatDate } from "../../../../utils/format-date";

import type { TextStyleModel } from "../../../../interfaces/models/text-style-model";
import type { CommentReplyEntity } from "../../../../interfaces/entities/comment-reply-entity";

import { CommentDate, CommentText, ProfilePicture, ReplyContainer, TextStyleOption, UserName } from "./styles";

interface Props {
    user: UserEntity,
    comment: CommentEntity,
    reply: CommentReplyEntity,
    setCommentState: React.Dispatch<React.SetStateAction<CommentEntity>>
}

const CommentReply = (props: Props) => {

    const { reply, user, comment, setCommentState } = props;

    const [isEditing, setIsEditing] = useState(false);

    const [editedReply, setEditedReply] = useState(reply.text);
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

    const [replyChanged, setReplyChanged] = useState(false);

    useEffect(() => editedReply.trim() != ''
        ? setReplyChanged(true)
        : setReplyChanged(false), [editedReply]
    );

    const handleEditReply = () => {

        const index = comment.replies.indexOf(reply);

        const editedReplyContent: CommentReplyEntity = {
            athor: reply.athor,
            date: reply.date,
            text: editedReply
        }

        setCommentState((prevState) => ({
            ...prevState,
            replies: comment.replies.with(index, editedReplyContent)
        }));

        setIsEditing(false);
        setTextStyle([]);
    }

    const handleCancelEditing = () => {
        setEditedReply(comment.text);
        setIsEditing(false);
        setTextStyle([]);
    }

    return (
        <ReplyContainer backgroundColor={c_white}>
            <Row>
                <Row
                    gap={'10px'}
                    cursor={'pointer'}
                    onClick={() => { }}
                    justifyContent={'space-between'}
                >
                    <ProfilePicture src={reply.athor.picture.src} />
                    <UserName color={c_grey_six}>{reply.athor.name}</UserName>
                </Row>
                <CommentDate color={c_grey_six}>{formatDate(reply.date)}</CommentDate>
            </Row>
            {(isEditing)
                ? <TextInput
                    value={editedReply}
                    placeholder="Escreva um comentário..."
                    onChange={(_text) => setEditedReply(_text)}
                />
                : <CommentText color={c_grey_six}>{reply.text}</CommentText>
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
                    : <a />
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
                            inActive={replyChanged}
                            onClick={(replyChanged) ? handleEditReply : () => { }}
                        />
                    </Row>
                    : <Row gap="10px">
                        {reply.athor.uid == user.uid || user.role == UserRoleEnum.ADMIN
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
                                text={reply.athor.uid == user.uid ? 'Editar' : 'Reportar'}
                                onClick={() => reply.athor.uid == user.uid
                                    ? setIsEditing(!isEditing) : null
                                }
                            />
                            : null
                        }
                    </Row>
                }
            </Row>
        </ReplyContainer>
    );
}

export default CommentReply;