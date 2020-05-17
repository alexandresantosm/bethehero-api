const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const donation_stand_id = request.headers.authorization;

    const donations = await connection('donations')
      .where('donation_stand_id', donation_stand_id)
      .select('*');
  }
}