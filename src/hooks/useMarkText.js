const createMarkup = (markup) => ({__html: markup});

const replaceText = (string, phrase) => {
  const regExp = new RegExp(phrase, 'i');
  return string.replace(regExp, `<span style="font-weight: bold">${phrase}</span>`)
};

const useMarkText = (string, phrase) => createMarkup(replaceText(string, phrase))

export default useMarkText;