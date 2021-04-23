import toDo from './toDo';

function setData(key, name, priority, data, level, status) {
  let storage = [];
  const info = {
    name: name,
    priority: priority,
    data: data,
    level: level,
    status: status,
  };
  storage.push(info);
  storage = storage.concat(JSON.parse(localStorage.getItem(key) || "[]"));
  localStorage.setItem(key, JSON.stringify(storage));
}
function getData(key) {
  const getInfo = localStorage.getItem(key);
  const newInfo = JSON.parse(getInfo);
  const InfoRealDisplay = newInfo.reverse();
  const keyName = key;
  function populate(item, id) {
    toDo(item.name, item.priority, item.data, id, keyName, "", item.status);
  }
  InfoRealDisplay.forEach((element, id) => {
    populate(element, id);
  });
}
export { setData, getData };
