const http = require('axios').default;
const dotenv = require("dotenv")
dotenv.config()

class RecordService {
  constructor() {}

  async getAll() {
    try {
      const response = await http({
        method: 'get',
        url: `${process.env.HELPDESK_REPORTS_URL}/api/helpdesk-reports/voicemails`,
        responseType: 'json'
      });
      return response
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new RecordService();