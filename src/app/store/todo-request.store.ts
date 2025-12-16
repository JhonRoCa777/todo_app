import { Injectable, signal } from "@angular/core";
import { Estado } from "../models/enums/Estado";
import { TodoRequest } from "../models/Todo";

@Injectable({
    providedIn: 'root'
})
export class TodoRequestStore {

    private initialState: TodoRequest = {
        id: undefined,
        description: '',
        estado: Estado.PENDIENTE
    };

    private _todoRequest = signal<TodoRequest>({ ...this.initialState });
    get todoRequest() { return this._todoRequest() }

    set(todo: TodoRequest) {
        this._todoRequest.set(todo);
    }

    reset() {
        this._todoRequest.set({ ...this.initialState });
    }
}
