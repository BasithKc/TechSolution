const axios = require('axios')
module.exports = {
  //Return services of company providing
  getServices: async (req, res) => {
    try {
      const service = await axios.get('https://test.aasakyadigitals.com/wp-json/custom/v1/services');
      //Return the services
      res.status(200).json(service.data)

    } catch (error) {
      //Handle the incoming error
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data from the API');
    }
  }
}