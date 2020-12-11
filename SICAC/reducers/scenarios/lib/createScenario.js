/**
 * Create a new scenario from a draft scenario
 *
 * @param {Number} id
 * @param {Object} draftScenario
 * @param {String} draftScenario.name
 * @param {Object[]} draftScenario.if
 * @param {Object[]} draftScenario.then
 * @param {Number} draftScenario.if[].id
 * @param {Object} draftScenario.if[].options All the if options
 * @param {Number} draftScenario.then[].id
 * @param {Object} draftScenario.then[].options All the then options
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

/**
 * Edit a scenario from a new values
 *
 * @param {Number} id id of the in editing scenario
 * @param {Object} state
 * @param {Number} state.lastId
 * @param {Array} state.scenarios
 * @param {Object} newScenarioValues
 * @param {String} newScenarioValues.name
 * @param {Object[]} newScenarioValues.if
 * @param {Object[]} newScenarioValues.then
 * @param {Number} newScenarioValues.if[].id
 * @param {Object} newScenarioValues.if[].options All the if options
 * @param {Number} newScenarioValues.then[].id
 * @param {Object} newScenarioValues.then[].options All the then options
 */
export const editScenario = (newScenarioValues, id, state) => {
  const scenario = state.scenarios.find(scenario => scenario.id === id)
  if (scenario) {
    scenario.name = newScenarioValues.name
    scenario.then = newScenarioValues.then
    scenario.if = newScenarioValues.if
  } else {
    throw new Error('No such scenario')
  }
}

/**
 * Switch a specific scenario to enable
 *
 * @param {Number} id
 * @param {Object} state
 * @param {Number} state.lastId
 * @param {Object[]} state.scenarios
 */
export const enableScenario = (state, id) => {
  const scenario = state.scenarios.find(scenario => scenario.id === id)
  if (scenario) {
    scenario.active = true
  } else {
    throw new Error('No such scenario')
  }
}

/**
 * Switch a specific scenario to disable
 *
 * @param {Number} id
 * @param {Object} state
 * @param {Number} state.lastId
 * @param {Object[]} state.scenarios
 */
export const disableScenario = (state, id) => {
  const scenario = state.scenarios.find(scenario => scenario.id === id)
  if (scenario) {
    scenario.active = false
  } else {
    throw new Error('No such scenario')
  }
}
