import { toMatchCSS } from "to-match-css";
import "@types/jest";

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchCSS: typeof toMatchCSS;
    }
  }
}
