import { CustomError } from "./custom-error";

export class DuplicatedError extends CustomError {
  statusCode = 403;
  reasons = "Can't create the same element twice";
  constructor() {
    super();

    Object.setPrototypeOf(this, DuplicatedError.prototype);
  }

  serializedErrors() {
    return [{ message: this.reasons }];
  }
}
