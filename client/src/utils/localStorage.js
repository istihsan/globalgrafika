export const setLocalStorageItem = (key, value) => {
  if (value instanceof Blob) {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const getLocalStorageItem = key => {
  const storedItem = localStorage.getItem(key);

  try {
    return JSON.parse(storedItem);
  } catch (error) {
    return storedItem;
  }
};

const a = getLocalStorageItem("key");
