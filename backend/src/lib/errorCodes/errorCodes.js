class ErrorCodes {
  create500(res) {
    res.status(500).send({ status: 'Internal server error' });
  }

  create400(res) {
    res.status(400).send({ status: 'Operation not supported' });
  }

  create422(res) {
    res.status(422).send({ status: 'Unprocessable entity.' });
  }
}

module.exports = ErrorCodes;
