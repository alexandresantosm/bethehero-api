const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const donation_stands = await connection('donation_stands').select('*');
  
    return response.json(donation_stands);
  },

  async create(request, response) {
    const { name, address, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('donation_stands').insert({
      id,
      name,
      address,
      email,
      whatsapp,
      city,
      uf,
    });
    
    return response.json({ id });
  } 
}