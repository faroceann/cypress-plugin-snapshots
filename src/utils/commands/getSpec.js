async function getSpec() {
  return Promise.resolve(Cypress.spec);
}

module.exports = getSpec;
