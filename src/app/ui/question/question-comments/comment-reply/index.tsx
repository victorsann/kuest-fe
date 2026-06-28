import { useState } from "react";
import { c_dark_blue, c_dark_red, c_grey_six, c_white } from "../../../../constants/colors";

import TextInput from "../../../text-input";
import Row from "../../../../components/row_styles";
import TextButton from "../../../button/text-button";

import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { CommentEntity } from "../../../../interfaces/entities/comment-entity";

import TextSyleEnum from "../../../../constants/enum/text-style.enum";

import type { TextStyleModel } from "../../../../interfaces/models/text-style-model";
import type { CommentReplyEntity } from "../../../../interfaces/entities/comment-reply-entity";

import { CommentDate, CommentText, ProfilePicture, ReplyContainer, TextStyleOption, UserName } from "./styles";

interface Props {
    user: UserEntity,
    comment: CommentEntity,
    reply: CommentReplyEntity,
    setComment: React.Dispatch<React.SetStateAction<CommentEntity>>
}

const CommentReply = (props: Props) => {

    const { reply, user } = props;

    const [isEditing, setIsEditing] = useState(false);

    const [newComment, setNewComment] = useState(reply.text);
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
        <ReplyContainer backgroundColor={c_white}>
            <Row>
                <Row
                    gap={'10px'}
                    cursor={'pointer'}
                    onClick={() => { }}
                    justifyContent={'space-between'}
                >
                    <ProfilePicture src={props.user.picture.src} />
                    <UserName color={c_grey_six}>{reply.athor.name}</UserName>
                </Row>
                <CommentDate color={c_grey_six}>{reply.date}</CommentDate>
            </Row>
            {(isEditing)
                ? <TextInput
                    value={newComment}
                    placeholder="Escreva um comentário..."
                    onChange={(_text) => setNewComment(_text)}
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
                        text={reply.athor.uid == user.uid ? 'Editar' : 'Reportar'}
                        onClick={() => reply.athor.uid == user.uid ? setIsEditing(!isEditing) : null}
                    />
                }
            </Row>
        </ReplyContainer>
    );
}

export default CommentReply;