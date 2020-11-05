/* eslint-disable no-unused-vars */

import "@types/jest";
export {};

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toMatchCSS(css: string): R;
    }
  }
}
