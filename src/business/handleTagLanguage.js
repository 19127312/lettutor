export function getLanguagesListLabel(listKey) {
  const result = [];
  listKey.forEach((item) => {
    result.push(capitalizeFirstLetter(item));
  });
  return result;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
