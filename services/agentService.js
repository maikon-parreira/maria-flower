const http = require('axios').default
const dotenv = require("dotenv")
dotenv.config()

class AgentService {
  constructor() {}

  async getAll() {
    try {
      const response = await http({
        method: 'get',
        url: `${process.env.THE_AGENTS_URL}/api/the-agents`,
        responseType: 'json'
      })
      return response
    } catch (error) {
      console.error(error)
    }
  }

  async create(req) {
    try {
      const response = await http({
        method: 'post',
        url: `${process.env.THE_AGENTS_URL}/api/the-agents`,
        data: req,
        responseType: 'json'
      })
      return response
    } catch (error) {
      console.error(error)
    }
  }

}

module.exports = new AgentService()