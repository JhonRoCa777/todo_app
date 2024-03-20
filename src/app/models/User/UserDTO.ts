export interface UserDTO {
  Id: string,
  Names: string,
  LastNames: string,
  Email: string,
  Password: string,
  Role: 'ADMIN' | 'CLIENT'
}
