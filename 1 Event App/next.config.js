const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Darpit_208',
        mongodb_password: 'AJpzUGsMh1qxOf0p',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'events-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'Darpit_208',
      mongodb_password: 'AJpzUGsMh1qxOf0p',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'events',
    },
  };
};
