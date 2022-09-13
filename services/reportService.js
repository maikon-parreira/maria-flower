const http = require('axios').default;

class ReportService {
  constructor() {}

  async getAll() {
    try {
      const response = await http({
        method: 'get',
        url: 'http://localhost:3002/api/helpdesk-reports/all',
        responseType: 'json'
      });
      return response
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new ReportService();