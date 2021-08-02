function createStore() {
  let state;

  function getStore() {
    return state;
  }
  return {
    getStore,
  };
}
export default createStore();
