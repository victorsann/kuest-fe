import type { UserPicture } from "../models/user-picture-model";

export interface CommentAuthorEntity {
    uid: string,
    name: any,
    picture: UserPicture
}