const canvas = new fabric.Canvas('c', {
  backgroundColor: '#fff',
  selectionLineWidth: 4,
  selection: false,
  hoverCursor: "pointer"
});

function deleteObject() {
  canvas.getActiveObjects().forEach((obj) => {
    canvas.remove(obj)
  });
  canvas.discardActiveObject().renderAll()
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName === 'Delete') {
    deleteObject();
    return;
  }
}, false);


function resize() {
  const width = document.getElementById('canvas-editor-container').offsetWidth;
  const height = document.getElementById('canvas-editor-container').offsetHeight;
  scaleRatio = Math.min(width * 0.95 / 854, height * 0.95 / 480, 1);
  canvas.setDimensions({ width: 854 * scaleRatio, height: 480 * scaleRatio });
  canvas.setZoom(scaleRatio);
}

window.addEventListener("load", () => {
  // openSidebarMenu('init');
  closeMenu();
  resize();
});

window.addEventListener("resize", resize);

document.getElementById('btn-background').addEventListener('click', ev => {
  openSidebarMenu('background');
});

document.getElementById('btn-text').addEventListener('click', ev => {
  spawnText();
});

document.getElementById('btn-drawing').addEventListener('click', ev => {
  openSidebarMenu('drawing');
});

document.getElementById('btn-decoration').addEventListener('click', ev => {
  openSidebarMenu('decoration');
});

document.getElementById('btn-audio').addEventListener('click', ev => {
  openSidebarMenu('audio');
});

document.getElementById('btn-close').addEventListener('click', ev => {
  closeMenu();
});

function updateProperties() {
  canvas.getObjects().forEach(obj => {
    if(obj.id === selectedObject.get('id')) {
      selectedObject.set('left', Number.parseInt(document.getElementById('inputX').value)).setCoords();
      selectedObject.set('top', Number.parseInt(document.getElementById('inputY').value)).setCoords();
      selectedObject.set('scaleX', Number.parseFloat(document.getElementById('inputScaleX').value/100)).setCoords();
      selectedObject.set('scaleY', Number.parseFloat(document.getElementById('inputScaleY').value/100)).setCoords();
      selectedObject.set('angle', Number.parseInt(document.getElementById('inputAngle').value)).setCoords();
      selectedObject.set('opacity', Number.parseFloat(document.getElementById('inputOpacity').value/100)).setCoords();
      canvas.renderAll();
    }
  });
}

document.getElementById('inputX').addEventListener('change', updateProperties);
document.getElementById('inputY').addEventListener('change', updateProperties);
document.getElementById('inputScaleX').addEventListener('change', updateProperties);
document.getElementById('inputScaleY').addEventListener('change', updateProperties);
document.getElementById('inputAngle').addEventListener('change', updateProperties);
document.getElementById('inputOpacity').addEventListener('change', updateProperties);

function updateControls(options) {
  selectedObject = options.target;
  console.log(options.target.get('type'));

  if (options.target.type === 'text' || options.target.type === 'i-text') {
    openSidebarMenu('inspectorText');
  } else {
    openSidebarMenu('inspector');
  }

  document.getElementById('inputX').value = Number.parseInt(options.target.left);
  document.getElementById('inputY').value = Number.parseInt(options.target.top);
  document.getElementById('inputScaleX').value = Number.parseInt(options.target.scaleX*100);
  document.getElementById('inputScaleY').value = Number.parseInt(options.target.scaleY*100);
  document.getElementById('inputAngle').value = Number.parseInt(options.target.angle);
  document.getElementById('inputOpacity').value = Number.parseInt(options.target.opacity*100);
}

canvas.on({
  'object:moving': updateControls,
  'object:scaling': updateControls,
  'object:resizing': updateControls,
  'object:rotating': updateControls,
  'object:skewing': updateControls,
  'selection:created': updateControls,
  'object:modified': updateControls,
  'selection:updated': updateControls,
  'selection:cleared': () => openSidebarMenu('initial'),
});
