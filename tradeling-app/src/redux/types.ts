import {
  Action,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
  PayloadAction<TypeConstant, TPayload> { }

export interface IApplicationState {
  search: {
    itemsLoader: boolean;
    results: [];
    users: [];
    repos: [];
    term: string;
    kind: string;
  }
}
