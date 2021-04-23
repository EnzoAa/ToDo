import { setData } from './storage';
import sort from './sort';

function modalBackground() {
  const body = document.getElementById('background');
  const wrapper = document.createElement('div');
  wrapper.id = 'modalbackground';
  body.appendChild(wrapper);
  function background() {
    const backgroundDiv = document.createElement('div');
    backgroundDiv.style.cssText = 'background-color:black;width:100%; height:100%;position:absolute;top:0; opacity : 0.5';
    wrapper.appendChild(backgroundDiv);
  }
  function card() {
    const container = document.createElement('div');
    container.id = 'container';
    container.style.cssText = 'background-color:white;width:400px; height:500px;position:absolute;top:150px;left:37%;border-radius:40px';
    wrapper.appendChild(container);
  }
  background();
  card();
}
function todoContent() {
  const container = document.getElementById('container');
  function taskText() {
    const title = document.createElement('p');
    const text = document.createTextNode('Task name');
    title.id = 'modalText';
    title.appendChild(text);
    container.appendChild(title);
  }
  function taskInput() {
    const input = document.createElement('input');
    input.placeholder = 'Task name';
    input.setAttribute('type', 'text');
    input.id = 'textInput';
    input.className = 'modalInput';
    container.appendChild(input);
  }
  function priortyText() {
    const title = document.createElement('p');
    title.id = 'modalText';
    const text = document.createTextNode('Priority level');
    title.appendChild(text);
    container.appendChild(title);
  }
  function priortSelect() {
    const select = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const option4 = document.createElement('option');
    option1.text = 'Priorty level';
    option1.value = '';
    option2.text = 'Low priorty';
    option2.value = 'Low priorty';
    option3.text = 'Mediun priorty';
    option3.value = 'Mediun priorty';
    option4.text = 'High priorty';
    option4.value = 'High priorty';
    select.className = 'modalInput';
    select.id = 'select';
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    container.appendChild(select);
  }
  function dateText() {
    const title = document.createElement('p');
    title.id = 'modalText';
    const text = document.createTextNode('Date');
    title.appendChild(text);
    container.appendChild(title);
  }
  function dataInput() {
    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.value = '2000-05-05';
    input.className = 'modalInput';
    input.id = 'dataInput';
    container.appendChild(input);
  }

  taskText();
  taskInput();
  priortyText();
  priortSelect();
  dateText();
  dataInput();
}
function todoButtons(key) {
  const container = document.getElementById('container');
  const buttonWrapper = document.createElement('div');
  buttonWrapper.id = 'buttonWrapper';
  container.appendChild(buttonWrapper);
  const buttonCancel = document.createElement('button');
  buttonCancel.textContent = 'Cancel';
  buttonCancel.id = 'buttonCancel';
  buttonCancel.onclick = function cancel() {
    document.getElementById('modalbackground').remove();
  };
  const buttonConfirm = document.createElement('button');
  buttonConfirm.id = 'buttonConfirm';
  buttonConfirm.textContent = 'Confirm';
  buttonConfirm.onclick = function confirm() {
    const getText = document.getElementById('textInput').value;
    const getPriorty = document.getElementById('select').value;
    const getDate = document.getElementById('dataInput').value;
    if (getPriorty === 'Low priorty') {
      setData(key, getText, getPriorty, getDate, 'a', false);
    } else if (getPriorty === 'Mediun priorty') {
      setData(key, getText, getPriorty, getDate, 'b', false);
    } else {
      setData(key, getText, getPriorty, getDate, 'c', false);
    }
    sort('', key);

    document.getElementById('modalbackground').remove();
  };
  buttonWrapper.appendChild(buttonCancel);
  buttonWrapper.appendChild(buttonConfirm);
}
function selectContent(key) {
  const container = document.getElementById('container');
  function mainText() {
    const title = document.createElement('p');
    const text = document.createTextNode('Options');
    title.id = 'selectTitle';
    title.appendChild(text);
    container.appendChild(title);
  }
  function divCreator() {
    let i = 0;
    for (i = 0; i < 6; i += 1) {
      const div = document.createElement('div');
      div.id = 'sortSelector';
      div.className = i;
      container.appendChild(div);
    }
  }
  function div1() {
    const getDiv = document.getElementsByClassName('0');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = function doASort() {
      sort('textUp', key);
      setTimeout(() => {
        document.getElementById('modalbackground').remove();
      }, 100);
    };
    getDiv[0].appendChild(checkbox);
    const title = document.createElement('p');
    const text = document.createTextNode('Alphabetical  ↑');
    title.id = 'selectorText';
    title.appendChild(text);
    getDiv[0].appendChild(title);
  }
  function div2() {
    const getDiv = document.getElementsByClassName('1');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = function doASort() {
      sort('textDown', key);
      setTimeout(() => {
        document.getElementById('modalbackground').remove();
      }, 100);
    };
    getDiv[0].appendChild(checkbox);
    const title = document.createElement('p');
    const text = document.createTextNode('Alphabetical  ↓');
    title.id = 'selectorText';
    title.appendChild(text);
    getDiv[0].appendChild(title);
  }
  function div3() {
    const getDiv = document.getElementsByClassName('2');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = function doASort() {
      sort('priorityUp', key);
      setTimeout(() => {
        document.getElementById('modalbackground').remove();
      }, 100);
    };
    getDiv[0].appendChild(checkbox);
    const title = document.createElement('p');
    const text = document.createTextNode('Priority  ↑');
    title.id = 'selectorText';
    title.appendChild(text);
    getDiv[0].appendChild(title);
  }
  function div4() {
    const getDiv = document.getElementsByClassName('3');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = function doASort() {
      sort('priorityDown', key);
      setTimeout(() => {
        document.getElementById('modalbackground').remove();
      }, 100);
    };
    getDiv[0].appendChild(checkbox);
    const title = document.createElement('p');
    const text = document.createTextNode('Priority  ↓');
    title.id = 'selectorText';
    title.appendChild(text);
    getDiv[0].appendChild(title);
  }
  function div5() {
    const getDiv = document.getElementsByClassName('4');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = function doASort() {
      sort('dataUp', key);
      setTimeout(() => {
        document.getElementById('modalbackground').remove();
      }, 100);
    };
    getDiv[0].appendChild(checkbox);
    const title = document.createElement('p');
    const text = document.createTextNode('Data  ↑');
    title.id = 'selectorText';
    title.appendChild(text);
    getDiv[0].appendChild(title);
  }
  function div6() {
    const getDiv = document.getElementsByClassName('5');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = function doASort() {
      sort('dataDown', key);
      setTimeout(() => {
        document.getElementById('modalbackground').remove();
      }, 100);
    };
    getDiv[0].appendChild(checkbox);
    const title = document.createElement('p');
    const text = document.createTextNode('Data  ↓');
    title.id = 'selectorText';
    title.appendChild(text);
    getDiv[0].appendChild(title);
  }
  function buttonCancel() {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.id = 'buttonSelect';
    container.appendChild(buttonWrapper);
    const bttnCancel = document.createElement('button');
    bttnCancel.textContent = 'Cancel';
    bttnCancel.id = 'buttonCancel';
    bttnCancel.onclick = function cancel() {
      document.getElementById('modalbackground').remove();
    };
    buttonWrapper.appendChild(bttnCancel);
  }
  mainText();
  divCreator();
  div1();
  div2();
  div3();
  div4();
  div5();
  div6();
  buttonCancel();
}

function modal(type, key) {
  modalBackground();
  if (type === 'todo') {
    todoContent();
    todoButtons(key);
  } else if (type === 'select') {
    selectContent(key);
  }
}
export default modal;
