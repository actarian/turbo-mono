
function escapeRegexChars(text: string) {
  return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

function safeToString(text: string) {
  return text === undefined || text === null ? '' : text.toString().trim();
}

function encodeHTML(text: string) {
  return safeToString(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function autocompleteHighligth(text: string, query: string | string[] | undefined): string {
  if (!query) {
    return text;
  }
  if (!Array.isArray(query)) {
    query = query.split(' ');
  }
  text = encodeHTML(text);
  const escapedQuery = query.map(x => escapeRegexChars(x));
  const regExp = new RegExp('&[^;]+;|' + escapedQuery.join('|'), 'gi');
  // console.log(regExp, query);
  return text.replace(regExp, function (match, i, b) {
    return '<strong>' + match + '</strong>';
    // return match.toLowerCase() === x.toLowerCase() ? '<strong>' + match + '</strong>' : match;
  });
}
