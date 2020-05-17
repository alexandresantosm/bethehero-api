const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const donation_stand = await connection('donation_stands')
      .where('id', id)
      .select('name')
      .first();

    if (!donation_stand) {
      return response.status(400).json({ error: 'Não foi encontrado um posto de doação com esse ID.'});
    }
    
    return response.json(donation_stand);
  }
}