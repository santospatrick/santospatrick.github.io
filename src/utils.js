export const flattenMessages = (nestedMessages, prefix = "") => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

export const consoleLogInspect = () => {
  var styles = [
    "background: #1C2329",
    "color: white",
    "line-height: 30px",
    "text-align: center",
    "font-weight: bold",
    "padding: 0 5px"
  ].join(";");

  console.log(
    "%c Oh i see, you can inspect the code here: https://github.com/santospatrick/santospatrick.github.io",
    styles
  );
};
