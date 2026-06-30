import { useEffect, useState } from "react";

import { c_dark_blue, c_grey_six, c_white } from "../../../../constants/colors";

import TextInput from "../../../text-input";
import Row from "../../../../components/row_styles";
import TextButton from "../../../button/text-button";

import TextSyleEnum from "../../../../constants/enum/text-style.enum";

import type { UserEntity } from "../../../../interfaces/entities/user-entity";
import type { TextStyleModel } from "../../../../interfaces/models/text-style-model";

import { Container, ProfilePicture, TextStyleOption, UserName } from "./styles";

interface Props {
    user: UserEntity,
    callBack: (comment: string) => void
}

const CommentInput = (props: Props) => {

    const { user, callBack } = props;

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

    const [comment, setComment] = useState('');
    const [commentChanged, setCommentChanged] = useState(false);

    useEffect(() => comment.trim() != ''
        ? setCommentChanged(true)
        : setCommentChanged(false), [comment]
    );

    const handleSetComment = () => {
        callBack(comment);
        setTextStyle([]);
        setComment('');
    }

    return (
        <Container backgroundColor={c_white}>
            <Row
                gap={'10px'}
                cursor={'pointer'}
                onClick={() => { }}
                justifyContent={'flex-start'}
            >
                <ProfilePicture src={user.picture.src} />
                <UserName color={c_grey_six}>{user.name}</UserName>
            </Row>
            <TextInput
                value={comment}
                placeholder="Escreva um comentário..."
                onChange={(_text) => setComment(_text)}
            />
            <Row>
                <Row gap="10px">
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
                <TextButton
                    text="Comentar"
                    color={c_grey_six}
                    inActive={commentChanged}
                    onClick={(commentChanged) ? handleSetComment : () => { }}
                />
            </Row>
        </Container>
    );
}

export default CommentInput;