import { ModelBase } from "./base/ModelBase"
import { Role } from "./enums/Role"

export interface User extends ModelBase {
  id: number,
  fullname: string,
  email: string,
  password: string,
  Role: Role
}

export interface UserLogin extends Pick<User, 'email' | 'password'>
{}
