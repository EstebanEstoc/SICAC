/**
 * @param {Object} draftScenario
 * @param {String} draftScenario.name
 * @param {Object[]} draftScenario.if
 * @param {Object[]} draftScenario.then
 * @param {Number} draftScenario.if[].id
 * @param {Object} draftScenario.if[].options All the if options
 * @param {Number} draftScenario.then[].id
 * @param {Object} draftScenario.then[].options All the then options
 * @param {Number} id
 */

export const createScenario = (draftScenario, id) => {
  return {
    id,
    name: draftScenario.name,
    date: new Date(),
    active: true,
    if: draftScenario.if,
    then: draftScenario.if
  }
}
