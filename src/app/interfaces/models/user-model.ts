import type UserRole from "../../constants/enum/user_role.enum";
import type { UserPicture } from "./user-picture-model";

export interface UserModel {
    uid: string,
    name: string,
    picture: UserPicture,
    role: UserRole
}