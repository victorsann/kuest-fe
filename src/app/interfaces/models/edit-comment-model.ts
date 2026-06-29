import type { CommentEntity } from "../entities/comment-entity";

export interface EditCommentModel {
    comment: CommentEntity,
    editedComment: string
}