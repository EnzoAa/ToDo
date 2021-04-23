import toDo from './toDo';

let todoInfo = [];
let i;
function getInfo(key) {
  let info = JSON.parse(localStorage.getItem(key));
  function populate(element, id) {
    let info = {
      name: element.name,
      priority: element.priority,
      data: element.data,
      level: element.level,
      tag: id,
      status: element.status,
    };
    todoInfo.push(info);
  }
  info.forEach((element, id) => {
    populate(element, id);
  });
}
function textUp(a, b) {
  if (a.name === b.name) {
    return 0;
  }
  if (a.name > b.name) {
    return 1;
  }
  return -1;
}
function textDown(a, b) {
  if (a.name === b.name) {
    return 0;
  }
  if (a.name > b.name) {
    return -1;
  }
  return 1;
}
function dataUp(a, b) {
  return a.data > b.data ? -1 : 1;
}
function dataDown(a, b) {
  return a.data > b.data ? 1 : -1;
}
function priorityUp(a, b) {
  return a.level > b.level ? -1 : 1;
}
function priorityDown(a, b) {
  return a.level > b.level ? 1 : -1;
}

function sortInfo(select) {
  if (select === 'textUp') {
    todoInfo.sort(textUp);
  } else if (select === 'dataUp') {
    todoInfo.sort(dataUp);
  } else if (select === 'priorityUp') {
    todoInfo.sort(priorityUp);
  } else if (select === 'textDown') {
    todoInfo.sort(textDown);
  } else if (select === 'dataDown') {
    todoInfo.sort(dataDown);
  } else if (select === 'priorityDown') {
    todoInfo.sort(priorityDown);
  }
}
function clean() {
  const father = document.getElementById('todo');
  father.remove();
  const newFather = document.createElement('div');
  newFather.id = 'todo';
  document.getElementById('content').appendChild(newFather);
}
function replace(key, select) {
  for (i = 0; i < todoInfo.length; i += 1) {
    toDo(
      todoInfo[i].name,
      todoInfo[i].priority,
      todoInfo[i].data,
      todoInfo[i].tag,
      key,
      select,
      todoInfo[i].status,
    );
  }
}

function sort(select, key) {
  getInfo(key);
  sortInfo(select);
  clean();
  replace(key, select);
  todoInfo = [];
}
export default sort;
