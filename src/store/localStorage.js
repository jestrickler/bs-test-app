export function loadState() {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    console.log('Error retrieving state', err)
    return undefined
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(err) {
    console.log('Error retrieving state', err)
  }
}
