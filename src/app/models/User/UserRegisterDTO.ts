import { UserDTO } from "./UserDTO";

export interface UserRegisterDTO extends Omit<UserDTO, "Id"> {
}
