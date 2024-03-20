import { UserDTO } from "./UserDTO";

export interface UserCredentialsDTO extends Pick<UserDTO, "Email" | "Password"> {
}
