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

window.addEventListener("load", resize);
window.addEventListener("resize", resize);

document.getElementById('btn-background').addEventListener('click', ev => {
  openSidebarMenu('background');
});

document.getElementById('btn-text').addEventListener('click', ev => {
  openSidebarMenu('text');
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

document.getElementById('inputX').addEventListener('change', ev => {

});

function updateControls(options) {
  // console.log(options.target);
  selectedObject = options.target;
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
  'selection:updated': updateControls
});