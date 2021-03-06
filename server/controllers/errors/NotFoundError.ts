import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  reasons = "Not found";

  constructor() {
    super();

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializedErrors() {
    return [{ message: this.reasons }];
  }
}
