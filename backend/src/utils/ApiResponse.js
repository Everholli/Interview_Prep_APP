class ApiResponse {
  constructor(res, data, message="Success", statusCode=200) {
    this.res = res;
    this.data = data;
    this.message = message;
    this.statusCode = statusCode < 400;
  }
}

export {ApiResponse};
