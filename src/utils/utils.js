import { API_URL, API_KEY, DEFAULT_PARAMS } from './properties';

export const queryBuilder = (queryText, offset) => {
  let usedOffset = offset ? offset : 0;
  if (queryText) {
    return `${API_URL}?${API_KEY}&q=${queryText}&offset=${usedOffset}&${DEFAULT_PARAMS}`;
  }
  return null;
};

export const debouncer = (func) => {
  if (func) {
    let debounceTimer;
    return () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        func();
      }, 500);
    };
  }
  return null;
};
