class APIValidator {
  constructor(request) {
    this.request = request;
  }
  validateId() {
    return Number(this.request.taskId) ? true : false;
  }
}

module.exports = APIValidator;
