import { ModelBase } from "./base/ModelBase"
import { Estado } from "./enums/Estado"

export interface Todo extends ModelBase {
  id: number,
  userId: number,
  description: string,
  estado: Estado
}

export type TodoRequest = Partial<Pick<Todo, 'id'>> & Pick<Todo, 'description' | 'estado'>;

export interface TodoGroup {
  label: string,
  amount: string
}
