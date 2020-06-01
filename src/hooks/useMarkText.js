const useMarkText = (string, phrase) => {
  const regExp = new RegExp(phrase);
  return string.replace(regExp, `<span style="font-weight: bold">${phrase}</span>`)
};

export default useMarkText;