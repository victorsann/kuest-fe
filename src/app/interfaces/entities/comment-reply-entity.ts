import type { CommentAuthorEntity } from "./comment-author-entity";

export interface CommentReplyEntity {
    date: string,
    text: string,
    athor: CommentAuthorEntity
}