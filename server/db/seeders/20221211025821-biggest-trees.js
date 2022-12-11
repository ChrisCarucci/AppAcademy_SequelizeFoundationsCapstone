'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Trees',
      [
        {
            tree: 'General Sherman',
            location: 'Sequoia National Park',
            height_Ft: 274.9,
            ground_Circumference_Ft: 102.6
        },
        {
            tree: 'General Grant',
            location: 'Kings Canyon National Park',
            height_Ft: 268.1,
            ground_Circumference_Ft: 107.5
        },
        {
            tree: 'President',
            location: 'Sequoia National Park',
            height_Ft: 240.9,
            ground_Circumference_Ft: 93
        },
        {
            tree: 'Lincoln',
            location: 'Sequoia National Park',
            height_Ft: 255.8,
            ground_Circumference_Ft: 98.3
        },
        {
            tree: 'Stagg',
            location: 'Private Land',
            height_Ft: 243,
            ground_Circumference_Ft: 109
        },
    ]
    );

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Trees', null, {
      name: ['General Sherman', 'General Grant', 'President', 'Lincoln', 'Stagg']
    });

  }
};
