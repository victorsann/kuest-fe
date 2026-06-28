import type UserRoleEnum from "../../constants/enum/user-role.enum";
import type { UserPicture } from "../models/user-picture-model";

export interface UserEntity {
    uid: string,
    name: string,
    picture: UserPicture,
    role: UserRoleEnum
}