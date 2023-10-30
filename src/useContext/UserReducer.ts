import { TasksState, objTextEmpty } from "./UserProvider";
import { IText } from "../../../types/texts";
import { LNG } from "./TextsContext";

type TextsActionType =
  | { type: "Texts"; payload: IText[] }
  | { type: "TextByLanguage"; payload: IText }
  | { type: "UpdateText"; payload: IText }
  | { type: "SetLanguage"; payload: LNG }
  | { type: "Error"; payload: string };

export const userReducer = (
  state: TasksState,
  action: TasksActionType
): TasksState => {
  switch (action.type) {
    case "Texts":
      return {
        ...state,
        texts: action.payloa,
      };
    case "TextByLanguage":
      return {
        ...state,
        text: action.payload,
      };
    case "UpdateText":
      return {
        ...state,
        text: action.payload,
      };
    case "SetLanguage":
      return {
        ...state,
        language: action.payload,
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
