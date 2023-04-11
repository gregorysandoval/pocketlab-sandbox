export class PLServerError extends Error {}

// export class IndexManagerError extends PLServerError {}

// export class InvalidClassIdxKeyError extends IndexManagerError {}
// export class InvalidDashboardIdxKeyError extends IndexManagerError {}
// export class InvalidAuthIdxdKeyError extends IndexManagerError {}

export interface ErrorPayload {
  message: string;
  code: number;
}

export interface ErrorSink {
  error(payload?: ErrorPayload): void;
  debug(message: string): void;
}

export class ConsoleErrorSink implements ErrorSink {
  error(payload?: ErrorPayload): void {
    console.error(JSON.stringify(payload));
  }

  debug(message: string): void {
    console.debug(message);
  }
}
