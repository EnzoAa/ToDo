import pageTodo from './pageToDo';

export function project(name) {
  const wrapper = document.getElementById('project');
  const container = document.createElement('div');
  container.id = 'projectContainer';
  container.className = 'containerBrabo';
  const pdiv = document.createElement('p');
  pdiv.id = 'colapissableText';
  pdiv.onclick = () => {
    pageTodo(name);
  };
  const text = document.createTextNode(name);
  const btn = document.createElement('p');
  btn.className = 'buttonBrabo';
  btn.id = 'colapissableText';
  const btnText = document.createTextNode('X');
  pdiv.appendChild(text);
  btn.appendChild(btnText);
  container.appendChild(pdiv);
  container.appendChild(btn);
  wrapper.appendChild(container);
}

function setProjetc() {
  const inputBox = document.getElementById('projectName');
  let projectData = [];
  projectData.push(inputBox.value);
  project(projectData);
  projectData = projectData.concat(
    JSON.parse(localStorage.getItem('projetos') || '[]'),
  );
  localStorage.setItem('projetos', JSON.stringify(projectData));
}
function removeProject() {
  const btn = document.getElementsByClassName('buttonBrabo');
  const div = document.getElementsByClassName('containerBrabo');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].onclick = () => {
      let storage = [];
      div[i].remove();
      const index = i;
      storage = JSON.parse(localStorage.getItem('projetos'));
      storage.reverse();
      localStorage.removeItem(storage[i]);
      storage.splice(index, 1);
      storage.reverse();
      localStorage.setItem('projetos', JSON.stringify(storage));
      removeProject();
    };
  }
}
export function setter() {
  const button = document.getElementById('newProject');
  const projectCreator = document.getElementById('projectCreator');
  const addBtn = document.getElementById('addBtn');
  addBtn.onclick = () => {
    setProjetc();
    button.style.cssText = '';
    projectCreator.style.cssText = '';
    removeProject();
  };
}

export function getProjects() {
  const getInfo = localStorage.getItem('projetos');
  const newInfo = JSON.parse(getInfo);
  const InfoRealDisplay = newInfo.reverse();
  function populate(item, id) {
    project(item, id);
  }
  InfoRealDisplay.forEach((element, id) => {
    populate(element, id);
    removeProject(id);
  });
}
