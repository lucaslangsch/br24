const { companiesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatus.util.js');

const showCompanies = async (req, res) => {
  const { status, data } = await companiesService.showCompanies()
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  showCompanies,
};
