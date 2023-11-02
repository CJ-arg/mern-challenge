import { tasksState } from "./UserProvider";
import { Task } from "../interfaces/interfaces";

type TasksActionType =
  | { type: "login" }
  | { type: "logout" }
  | { type: "getTasks"; payload: Task }
  | { type: "Error"; payload: string };
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
      console.log(action, "action.payload", state, "state", "data");

      return {
        ...state,
        msg: action.payload,
      };
    // case "user":
    //   return {
    //     ...state,
    //     text: action.payload,
    //   };
    // case 'SetLanguage':
    //     return {
    //         ...state,
    //         language: action.payload
    //     }
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

// export const userReducer = (
//   currentState: tasksState,
//   action: TasksActionType
// ): tasksState => {
//   switch (action.type) {
//     case types.login:
//       return { ...currentState, loggedIn: true };
//     case types.logout:
//       return { ...currentState, loggedIn: false };
//     case types.user:
//       return { ...currentState, UserLogin: action.payload };

//     default:
//       return currentState;
//   }
// };
