import modal from './modal';
import { getData } from './storage';

function pageTodo(name) {
  const main = document.getElementById('content');
  function remove() {
    if (main.childNodes.length > 1) {
      main.innerHTML = '';
    }
  }
  remove();
  function TopWrapper() {
    const topWrapper = document.createElement('div');
    topWrapper.id = 'topWrapper';
    main.appendChild(topWrapper);
  }
  TopWrapper();
  const wrapper = document.getElementById('topWrapper');
  function taskText() {
    const pdiv = document.createElement('p');
    pdiv.id = 'contentTitle';
    const text = document.createTextNode(name);
    pdiv.appendChild(text);
    wrapper.appendChild(pdiv);
  }
  taskText();
  function rigthWrapper() {
    const rigth = document.createElement('div');
    rigth.id = 'rigthWrapper';
    wrapper.appendChild(rigth);
  }
  rigthWrapper();
  const content = document.getElementById('rigthWrapper');
  function selectDiv() {
    const selectWrapper = document.createElement('div');
    selectWrapper.id = 'selectWrapper';
    selectWrapper.onclick = function openSelect() {
      modal('select', name);
    };
    content.appendChild(selectWrapper);
  }
  selectDiv();
  const select = document.getElementById('selectWrapper');
  function selectText() {
    const text = document.createElement('p');
    text.id = 'contentTitle';
    const sortText = document.createTextNode('Sort');
    text.id = 'actionText';
    text.appendChild(sortText);
    select.appendChild(text);
  }
  selectText();
  function triangle() {
    const div = document.createElement('div');
    div.id = 'triangle';
    select.appendChild(div);
  }
  triangle();
  function button() {
    const btn = document.createElement('button');
    btn.textContent = 'New Task';
    btn.onclick = function openModal() {
      modal('todo', name);
    };
    btn.id = 'btn';
    content.appendChild(btn);
  }
  button();
  function barDiv() {
    const bar = document.createElement('div');
    bar.id = 'bar';
    main.appendChild(bar);
  }
  barDiv();
  function todoDiv() {
    const todo = document.createElement('div');
    todo.id = 'todo';
    main.appendChild(todo);
  }
  todoDiv();
  getData(name);
}
export default pageTodo;
