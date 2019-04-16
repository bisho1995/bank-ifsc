class Facade {
  constructor(Schema) {
    this.Schema = Schema;
  }

  create(body) {
    const schema = new this.Schema(body);
    return schema.save();
  }

  count(...args) {
    return this.Schema.countDocuments(...args).exec();
  }

  find(...args) {
    return this.Schema.find(...args).exec();
  }

  findDistinct(distinct, ...args) {
    return this.Schema.find(...args).distinct(distinct)
      .exec();
  }

  findOne(...args) {
    return this.Schema.findOne(...args).exec();
  }

  findById(...args) {
    return this.Schema.findById(...args).exec();
  }

  update(...args) {
    return this.Schema.update(...args).exec();
  }

  remove(...args) {
    return this.Schema.remove(...args).exec();
  }

  deleteMany(...args) {
    return this.Schema.deleteMany(...args).exec();
  }
}

module.exports = Facade;
