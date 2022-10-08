const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error(`Error during saving ${key} to local strage `, error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(`Local storage does not contain ${key}! Error: `, error.message);
  }
};

const del = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Local storage does not contain ${key}! Error: `, error.message);
  }
};

export default {
  save,
  load,
  del,
};
