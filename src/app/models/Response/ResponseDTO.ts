export interface ResponseDTO<T> {
  status: string,
  message: string[],
  data: T
}
