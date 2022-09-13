const http = require('axios').default;

class RecordService {
  constructor() {}

  async getAll() {
    try {
      const response = await http({
        method: 'get',
        url: 'http://localhost:3001/api/helpdesk/recordVoice/all',
        responseType: 'json'
      });
      return response
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new RecordService();