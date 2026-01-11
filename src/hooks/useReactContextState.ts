import { useContext } from "react";
import { ReactAPIContext } from "../contexts/react-api.context";

export function useReactContextState() {
  return useContext(ReactAPIContext);
}
