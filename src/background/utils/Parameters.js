class Parameters {
  data;

  constructor(dataJson) {
    this.data = dataJson;
  }

  isSame() {
    return true;
  }

  isUpwardCompatible() {

  }
}

module.exports = Parameters;
