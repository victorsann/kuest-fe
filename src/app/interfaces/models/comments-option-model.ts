import type CommentOptionsEnum from "../../constants/enum/comments-options-enum";

export interface CommentOptionModel {
    title: string,
    action: Function,
    isActive?: boolean,
    type: CommentOptionsEnum
}