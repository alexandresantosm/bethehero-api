const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('donations').count();

    const donations = await connection('donations')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    response.header('X-Total-Count', count['count(*)']);

    return response.json(donations);
  },

  async create(request, response) {
    const { date, schedule } = request.body;
    const donation_stand_id = request.headers.authorization;

    const [id] = await connection('donations').insert({
      date,
      schedule,
      donation_stand_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const donation_stand_id = request.headers.authorization;

    const donation = await connection('donations')
      .where('id', id)
      .select('donation_stand_id')
      .first();

    if (donation.donation_stand_id != donation_stand_id) {
      return response.status(401).json({ error: 'Operação não permitida.'});
    }

    await connection('donations').where('id', id).delete();

    return response.status(204).send();
  }
}