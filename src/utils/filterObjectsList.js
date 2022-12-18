export const filterObjectsList = (needdle, haystack, key) => {
  const normalizedNeedle = needdle.toLowerCase();
  return haystack.filter(item =>
    item[key].toLowerCase().includes(normalizedNeedle)
  );
};
