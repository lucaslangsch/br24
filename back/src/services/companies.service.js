const { prisma } = require("../prisma/prismaClient");

const showCompanies = async () => {
  const companies = await prisma.companies.findMany({
    include: { contact: true },
  });
  if (companies.length === 0) return { status: 'NOT_FOUND', data: { message: 'Nenhuma empresa cadastrada' } };
  return { status: 'SUCCESSFUL', data: companies };
};

module.exports = {
  showCompanies,
};
