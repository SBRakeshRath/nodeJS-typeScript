type errorCode = "INTERNAL_ERROR" | "NOT_AUTHORIZED" | "NOT_FOUND";

class serverError extends Error {
  status: number = 500;
  code: errorCode = "INTERNAL_ERROR";
  message: string = "something went wrong";
  err: Error = new Error("something went wrong");

  constructor(
    err?: Error,
    status?: number,
    code?: errorCode,
    message?: string
  ) {
    super();

    if (err) {
      this.err = err;
    }
    if (status) {
      this.status = status;
    }
    if (code) {
      this.code = code;
    }
    if (message) {
      this.message = message;
    }

    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, serverError.prototype);
  }

  getError() {
    return {
      status: this.status,
      code: this.code,
      message: this.message,
      err: this.err,
    };
  }
}


export default serverError ;