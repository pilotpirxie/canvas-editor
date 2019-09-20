let selectedObject;
let currentMenu = 'initial';

function closeMenu() {
  document.getElementById('sidebarMenu').classList.remove('d-flex');
  document.getElementById('sidebarMenu').classList.add('d-none');
  canvas.set('isDrawingMode', false);
  canvas.discardActiveObject();
  canvas.renderAll();
  currentMenu = 'initial';
}

function openSidebarMenu(type) {
  if (currentMenu === type && type !== 'inspector' && type !== 'inspectorText') {
    return closeMenu();
  }

  if (type === 'drawing') {
    canvas.discardActiveObject();
    canvas.renderAll();
  }


  currentMenu = type;

  document.getElementById('sidebarMenu').classList.remove('d-none');
  document.getElementById('sidebarMenu').classList.add('d-flex');


  document.getElementById('backgroundMenu').style.display = 'none';
  document.getElementById('decorationMenu').style.display = 'none';
  document.getElementById('audioMenu').style.display = 'none';
  document.getElementById('drawingMenu').style.display = 'none';

  document.getElementById('inspectorMenu').style.display = 'none';
  document.getElementById('textMenu').style.display = 'none';
  document.getElementById('nothingMenu').style.display = 'display';

  canvas.set('isDrawingMode', false);

  switch(type) {
    case 'inspector':
      openInspectorMenu();
      break;
    case 'inspectorText':
      openInspectorMenu();
      openTextMenu();
      break;
    case 'background':
      openBackgroundMenu();
      break;
    case 'drawing':
      openDrawingMenu();
      canvas.set('isDrawingMode', true);
      break;
    case 'decoration':
      openDecorationMenu();
      break;
    case 'audio':
      openAudioMenu();
      break;
    case 'initial':
      openNothingMenu();
      break;
    default:
      console.warn('Undefined menu type');
      break;
  }
}

function openNothingMenu() {
  document.getElementById('nothingMenu').style.display = 'initial';

}

function openInspectorMenu() {
  document.getElementById('nothingMenu').style.display = 'none';
  document.getElementById('inspectorMenu').style.display = 'initial';

}

function openBackgroundMenu() {
  document.getElementById('nothingMenu').style.display = 'none';
  document.getElementById('backgroundMenu').style.display = 'initial';

}

function openTextMenu() {
  document.getElementById('nothingMenu').style.display = 'none';
  document.getElementById('textMenu').style.display = 'initial';

}

function openDrawingMenu() {
  document.getElementById('nothingMenu').style.display = 'none';
  document.getElementById('drawingMenu').style.display = 'initial';

}

function openDecorationMenu() {
  document.getElementById('nothingMenu').style.display = 'none';
  document.getElementById('decorationMenu').style.display = 'initial';

}

function openAudioMenu() {
  document.getElementById('nothingMenu').style.display = 'none';
  document.getElementById('audioMenu').style.display = 'initial';

}


function spawnImage() {

}

function spawnText(fontFamily = 'Arial') {
  const text = new fabric.IText('Type Something', {
    fontSize: 100,
    fontFamily: fontFamily
  });
  canvas.add(text);
  text.set({
    transparentCorners: false,
    cornerColor: 'white',
    cornerStrokeColor: 'black',
    borderColor: 'black',
    cornerSize: 12,
    padding: 10,
    cornerStyle: 'circle',
  });
  text.center();
  text.id = generateUUID();
}

function spawnDecoration() {

}

function attachMusic() {

}
