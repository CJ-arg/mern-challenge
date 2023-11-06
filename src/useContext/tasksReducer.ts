import { tasksState } from "./UserProvider";
import { Task, UserRegister, TaskSave } from "../interfaces/interfaces";

type TasksActionType =
  | { type: "login" }
  | { type: "logout" }
  | { type: "getTasks"; payload: Task }
  | { type: "postRegister"; payload: UserRegister }
  | { type: "Error"; payload: string }
  | { type: "saveTask"; payload: TaskSave };

// | { type: "TextByLanguage"; payload: IText }
// | { type: "UpdateText"; payload: IText }
// | { type: "SetLanguage"; payload: LNG }

export const tasksReducer = (
  state: tasksState,
  action: TasksActionType
): TasksState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        loggedIn: true,
      };
    case "logout":
      return {
        ...state,
        loggedIn: false,
      };
    case "getTasks":
      return {
        ...state,
        msg: action.payload,
      };
    case "postRegister":
      return {
        ...state,
        user: action.payload,
      };
    case "saveTask":
      return {
        ...state,
        task: action.payload,
      };

    case "Error":
      return {
        ...state,
        message: action.payload,
        text: objTextEmpty,
      };
    default:
      return state;
  }
};
