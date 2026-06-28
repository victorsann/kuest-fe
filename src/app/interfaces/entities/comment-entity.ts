import type { CommentAuthorEntity } from "./comment-author-entity";
import type { CommentReplyEntity } from "./comment-reply-entity";

export interface CommentEntity {
    date: string,
    text: string,
    numberOfLikes: number,
    numberOfReplies: number,
    replies: Array<CommentReplyEntity>,
    athor: CommentAuthorEntity
}