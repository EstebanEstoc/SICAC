/**
 * Create a new scenario from a draft scenario
 *
 * @param {Number} id
 * @param {Object} draftScenario
 * @param {String} draftScenario.name
 * @param {Object[]} draftScenario.conditions
 * @param {Object[]} draftScenario.actions
 * @param {Number} draftScenario.conditions[].id
 * @param {Object} draftScenario.conditions[].options All the if options
 * @param {Number} draftScenario.actions[].id
 * @param {Object} draftScenario.actions[].options All the then options
 */
export const createScenario = (draftScenario, id) => {
  return {
    id,
    name: draftScenario.name,
    date: new Date(),
    active: true,
    conditions: draftScenario.conditions,
    actions: draftScenario.actions
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
 * @param {Object[]} newScenarioValues.conditions
 * @param {Object[]} newScenarioValues.actions
 * @param {Number} newScenarioValues.conditions[].id
 * @param {Object} newScenarioValues.conditions[].options All the if options
 * @param {Number} newScenarioValues.actions[].id
 * @param {Object} newScenarioValues.actions[].options All the then options
 */
export const editScenario = (newScenarioValues, id, state) => {
  const scenario = state.scenarios.find(scenario => scenario.id === id)
  if (scenario) {
    scenario.name = newScenarioValues.name
    scenario.actions = newScenarioValues.actions
    scenario.conditions = newScenarioValues.conditions
  } else {
    throw new Error('No such scenario')
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
 * @param {Object[]} newScenarioValues.conditions
 * @param {Object[]} newScenarioValues.actions
 * @param {Number} newScenarioValues.conditions[].id

 
 * @param {Object} newScenarioValues.conditions[].options All the if options
 * @param {String} newScenarioValues.actions[].question
 * @param {Number} newScenarioValues.actions[].id
 * @param {Number} newScenarioValues.actions[].status
 * @param {Object} newScenarioValues.actions[].options All the then options
 */
export const editFormActionStatus = (id, value, state) => {
  console.log("sqdvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
  console.log(value)
  const scenario = state.scenarios.find(scenario => scenario.id === id)
  console.log(scenario)
  if (scenario) {
    
    const status = scenario.actions.map((scenariodata) => scenariodata.status)[0];
    if(status != null){
      scenario.actions.map((scenariodata) => scenariodata.status = value);
    }
    console.log(status)
    // if(status == 0){
    //   scenario.actions.map((scenariodata) => scenariodata.status = 1);
    // }
    // if(status == 1){
    //   scenario.actions.map((scenariodata) => scenariodata.status = 0);
    // }
    
    
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







