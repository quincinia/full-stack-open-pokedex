/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// https://github.com/cypress-io/cypress/issues/3245#issuecomment-458899764
module.exports = (on) => {
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      // ^ make sure this is your browser name, you may
      // be using 'canary' or 'chromium' for example, so change it to match!
      args.push('--proxy-bypass-list=<-loopback>')
      return args
    }
  })
}