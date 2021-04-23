export function collapisable() {
  const activer = document.getElementById('sideWrapper');
  const triangle = document.getElementById('triangleSide');
  const projects = document.getElementById('projectWrapper');
  const a = document.getElementById('project');
  const b = document.getElementById('projectWrapper2');
  const c = document.getElementById('newProjectWrapper');
  const d = document.getElementById('projectCreator');
  const e = document.getElementById('newProject');
  activer.onclick = () => {
    if (triangle.className === 'triangleDown') {
      triangle.className = 'triangleUp';
      a.style.cssText = 'margin-top:0px';
      b.style.cssText = 'margin-top:0px';
      c.style.cssText = 'margin-top:0px';
      e.style.cssText = 'visibility:visible';
      projects.style.cssText = 'visibility:visible';
    } else if (triangle.className === 'triangleUp') {
      setTimeout(() => {
        projects.style.cssText = '';
      }, 400);
      triangle.className = 'triangleDown';
      a.style.cssText = '';
      b.style.cssText = '';
      c.style.cssText = '';
      d.style.cssText = 'visibility: hidden';
      e.style.cssText = 'visibility:  hidden';
    }
  };
}
export function newProject() {
  const button = document.getElementById('newProject');
  const projectCreator = document.getElementById('projectCreator');
  button.onclick = () => {
    button.style.cssText = 'visibility:hidden;display:none';
    projectCreator.style.cssText = 'visibility: visible';
  };
}
