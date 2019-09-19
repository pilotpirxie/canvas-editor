let selectedObject;

function openSidebarMenu(type) {
  switch(type) {
    case 'background':
      openBackgroundMenu();
      break;
    case 'text':
      openTextMenu();
      break;
    case 'drawing':
      openDrawingMenu();
      break;
    case 'decoration':
      openDecorationMenu();
      break;
    case 'audio':
      openAudioMenu();
      break;
    default:
      console.warn('Unedfined menu type');
      break;
  }
}

function openBackgroundMenu() {

}

function openTextMenu() {

}

function openDrawingMenu() {

}

function openDecorationMenu() {

}

function openAudioMenu() {

}


function spawnImage() {

}

function spawnText(fontFamily) {
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