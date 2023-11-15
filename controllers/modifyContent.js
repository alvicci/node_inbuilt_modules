module.exports = function modifyContent(content) {
  const JSONcontent = JSON.parse(content);
  for (person of JSONcontent.persons) {
    const upperFirst = person.firstName.toUpperCase();
    const upperLast = person.lastName.toUpperCase();
    person.firstName = upperFirst;
    person.lastName = upperLast;
  }
  return JSON.stringify(JSONcontent);
};
