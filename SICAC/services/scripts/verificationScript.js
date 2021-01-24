import { store } from '../../store/store'

const verificationScript = () => {
  const scenarios = store.getState().scenarios
  console.log(scenarios)
}

export default verificationScript
