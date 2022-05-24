export class APIError {
    message: string

  constructor(message: string) {
    this.message = message
  }

  toString = () => {
    return this.message
  }
}