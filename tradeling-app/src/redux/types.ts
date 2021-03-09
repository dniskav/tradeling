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
    results: IResultItem[];
    term: string;
    kind: string;
  }
}

export interface IResultItem {
  id: string;
  image: { 
    src: string;
    alt: string;
  };
  data: {
    description: string;
    status: string;
  };
};