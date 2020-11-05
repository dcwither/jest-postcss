/* eslint-disable no-unused-vars */

import "@types/jest";

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchCSS(css: string): R;
    }
  }
}
