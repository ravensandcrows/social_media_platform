const sequelize = require('../config/connection');

const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedDatabase();