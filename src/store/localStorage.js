// clave para almacenar en caché los datos

const storageSet = (key, data) => {
  const parse = JSON.stringify(data);
  localStorage.setItem(key, parse);
};

const storageRemove = (key) => {
  localStorage.removeItem(key);
};

const storageGet = (key) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    storageRemove(key);
  }
};

export { storageSet, storageRemove, storageGet };
