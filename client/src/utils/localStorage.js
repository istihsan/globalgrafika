export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorageItem = key => {
  const items = JSON.parse(localStorage.getItem(key));
  return items;
};

const a = getLocalStorageItem("key");
