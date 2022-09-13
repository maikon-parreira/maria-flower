const http = require('axios').default;

class AgentService {
  constructor() {}

  async getAll() {
    try {
      const response = await http({
        method: 'get',
        url: 'http://localhost:3000/api/the-agents',
        responseType: 'json'
      });
      return response
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new AgentService();