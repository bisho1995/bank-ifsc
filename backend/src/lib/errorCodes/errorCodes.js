class ErrorCodes {
  create500(res) {
    res.status(500).send({ status: "failure", message: 'Internal server error' });
  }

  create400(res) {
    res.status(400).send({ status: "failure", message: 'Operation not supported' });
  }

  create422(res) {
    res.status(422).send({ status: "failure", message: 'Unprocessable entity.' });
  }
}

module.exports = new ErrorCodes();
