'use strict'

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'tilltax',
    environment,
    rootURL: '/',
    locationType: 'auto',
    betaSite: process.env.TILLTAX_BETA,
    fastboot: {
      hostWhitelist: [/^(\w+\.)?tilltax.com$/, /^localhost:\d+$/]
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    // https://github.com/poteto/ember-metrics
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        evironments: ['development', 'production'],
        config: {
          id: 'UA-135499270-2',
          // Use `analytics_debug.js` in development
          debug: environment === 'development',
          // Use verbose tracing of GA events
          trace: environment === 'development',
          // Ensure development env hits aren't sent to GA
          sendHitTask: environment !== 'development',
          // Specify Google Analytics plugins
          require: []
        }
      }
    ],

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    DS: {
      host: process.env.API_HOST || 'http://localhost:4000'
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
    ENV.APP.autoboot = false
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.DS.host = 'https://api.tilltax.com'
  }

  return ENV
}
