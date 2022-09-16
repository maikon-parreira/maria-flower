const http = require('axios').default;
const dotenv = require("dotenv")
dotenv.config()

class ReportService {
  constructor() {}

  async getAll() {
    try {
      const response = await http({
        method: 'get',
        url: `${process.env.HELPDESK_REPORTS_URL}/api/helpdesk-reports/interactions`,
        responseType: 'json'
      });
      return response
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new ReportService();