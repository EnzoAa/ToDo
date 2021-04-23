import sort from './sort';

function toDo(nome, prioridade, data, id, key, selected, status) {
  const content = document.getElementById('todo');
  const wrapper = document.createElement('div');
  wrapper.id = 'todoWrapper';

  function checkbox() {
    const checkboxe = document.createElement('input');
    checkboxe.setAttribute('type', 'checkbox');
    checkboxe.id = 'checkbox';
    if (status === true) {
      checkboxe.checked = true;
      wrapper.style.cssText = 'opacity :0.5;';
    } else {
      checkboxe.checked = false;
    }
    checkboxe.onclick = () => {
      const stats = status;
      let storage = [];
      storage = JSON.parse(localStorage.getItem(key));
      storage[id].status = !stats;
      localStorage.setItem(key, JSON.stringify(storage));
      sort(selected, key);
    };
    wrapper.appendChild(checkboxe);
  }

  function taskName() {
    const taskname = document.createElement('input');
    taskname.placeholder = nome;
    taskname.value = nome;
    taskname.setAttribute('type', 'text');
    taskname.id = 'inputText';
    wrapper.appendChild(taskname);
  }

  function priorty() {
    const select = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const option4 = document.createElement('option');
    function priortyLevel() {
      if (prioridade === 'Low priorty') {
        wrapper.className = 'a';
      } else if (prioridade === 'Mediun priorty') {
        wrapper.className = 'b';
      } else {
        wrapper.className = 'c';
      }
    }
    option1.text = prioridade;
    option1.value = prioridade;
    option2.text = 'Low priorty';
    option2.value = 'Low priorty';
    option3.text = 'Mediun priorty';
    option3.value = 'Mediun priorty';
    option4.text = 'High priorty';
    option4.value = 'High priorty';
    select.id = 'priority';
    select.onchange = () => {
      let storage = [];
      storage = JSON.parse(localStorage.getItem(key));
      storage[id].priority = select.options[select.selectedIndex].text;
      if (select.options[select.selectedIndex].text === 'Low priorty') {
        storage[id].level = 'a';
      } else if (
        select.options[select.selectedIndex].text === 'Mediun priorty'
      ) {
        storage[id].level = 'b';
      } else {
        storage[id].level = 'c';
      }
      localStorage.setItem(key, JSON.stringify(storage));
      sort(selected, key);
    };
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    wrapper.appendChild(select);
    priortyLevel();
  }

  function date() {
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.value = data;
    date.id = 'priority';
    wrapper.appendChild(date);
  }
  function removeItem() {
    let storage = [];
    const index = id;
    storage = JSON.parse(localStorage.getItem(key));
    storage.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(storage));
  }
  function removeBtn() {
    const btn = document.createElement('div');
    btn.textContent = 'X';
    btn.id = 'removeBtn';
    btn.onclick = () => {
      content.removeChild(wrapper);
      removeItem();
      sort(selected, key);
    };

    wrapper.appendChild(btn);
  }
  checkbox();
  taskName();
  priorty();
  date();
  removeBtn();
  content.appendChild(wrapper);
}
export default toDo;
