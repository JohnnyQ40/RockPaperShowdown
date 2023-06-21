
const seedUsers = require('./seedData.js');
const sequelize = require('../config/connection')

const seedUser = async () => {
    try {
        await seedUsers();
        console.log('\n ---- Database seeded successfully! ---- \n');
      } catch (error) {
        console.error('\n ---- Error seeding the database: ---- \n', error);
      }
};

seedUser();
       