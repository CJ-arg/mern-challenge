import { tasksState } from "./UserProvider";
import { types } from "./types";

// type TextsActionType =
// | { type: "Texts"; payload: IText[] }
//   | { type: "TextByLanguage"; payload: IText }
//   | { type: "UpdateText"; payload: IText }
//   | { type: "SetLanguage"; payload: LNG }
//   | { type: "Error"; payload: string };

export const userReducer = (
  currentState: tasksState,
  action: TasksActionType
): tasksState => {
  switch (action.type) {
    case types.login:
      return { ...currentState, loggedIn: true };
    case types.logout:
      return { ...currentState, loggedIn: false };
    case types.user:
      return { ...currentState, user: {} };

    default:
      return currentState;
  }
};
