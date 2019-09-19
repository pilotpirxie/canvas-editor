const canvas = new fabric.Canvas('c', {
  backgroundColor: '#fff',
  selectionLineWidth: 4,
  // isDrawingMode: true
  selection: false,
  hoverCursor: "pointer"
});

function draw(a) {
  canvas.set('isDrawingMode', a);
}

const rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 60,
  height: 60,
  angle: 0,
  opacity: 0.4
});

canvas.add(rect);

rect.set('fill', 'red');
rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
rect.set('angle', 15).set('flipY', true);

function spawnImage(path) {
  fabric.Image.fromURL(path, img => {
    img.scaleX = 1;
    img.scaleY = 1;
    img.filters.push(new fabric.Image.filters.Grayscale());
    img.applyFilters();
    img.left = (canvas.width / 2) - (img.width / 2) + 100;
    img.top = (canvas.height / 2) - (img.height / 2) + 100;
    canvas.add(img);
  });
}

const el = canvas.getObjects()[0];

fabric.Object.prototype.getCoordinates = function () {
  return JSON.stringify({x: this.get('left'), y: this.get('top')});
};

spawnImage('src/img/test.png');

// const path = new fabric.Path('M 0 0 L 300 100 L 200 300 z');
// path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
// canvas.add(path);
setTimeout(() => {
  rect.animate('angle', '+=360', {
    onChange: () => {
      canvas.renderAll();
    },
    duration: 3000,
    easing: fabric.util.ease.easeOutBounce
  });

}, 1000);

var text = new fabric.IText('hello\nworld', {
  left: 100,
  top: 100,
  fontSize: 100,
  fontWeight: 'bold',
  textAlign: 'right',
  textBackgroundColor: 'rgb(0,200,0)',
  perPixelTargetFind: true
});
canvas.add(text);

text.on('selected', options => {
  console.log(options);
});

var circle = new fabric.Circle({
  radius: 100,
  fill: '#eef',
  scaleY: 0.5,
  originX: 'center',
  originY: 'center'
});

var text = new fabric.Text('hello world', {
  fontSize: 30,
  originX: 'center',
  originY: 'center'
});

var group = new fabric.Group([ circle, text ], {
  left: 150,
  top: 100,
  angle: -10
});

canvas.add(group);

setTimeout(() => {
  // get as json state
  console.log(JSON.stringify(canvas));

  // get as base64 img
  // console.log(canvas.toDataURL('png'));

  // get as svg
  console.log(canvas.toSVG());
}, 1200);

// load form json
// canvas.loadFromJSON('{"version":"3.4.0","objects":[{"type":"rect","version":"3.4.0","originX":"left","originY":"top","left":100,"top":100,"width":60,"height":60,"fill":"red","stroke":"rgba(100,200,200,0.5)","strokeWidth":5,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":27.08,"flipX":false,"flipY":true,"opacity":0.4,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"rx":0,"ry":0},{"type":"text","version":"3.4.0","originX":"left","originY":"top","left":100,"top":100,"width":250,"height":244.08,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"hello\\nworld","fontSize":100,"fontWeight":"bold","fontFamily":"Times New Roman","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"right","textBackgroundColor":"rgb(0,200,0)","charSpacing":0,"styles":{}},{"type":"group","version":"3.4.0","originX":"left","originY":"top","left":150,"top":100,"width":201,"height":100.5,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":-10,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"objects":[{"type":"circle","version":"3.4.0","originX":"center","originY":"center","left":0,"top":0,"width":200,"height":200,"fill":"#eef","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":0.5,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"radius":100,"startAngle":0,"endAngle":6.283185307179586},{"type":"text","version":"3.4.0","originX":"center","originY":"center","left":0,"top":0,"width":137.47,"height":33.9,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"hello world","fontSize":30,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}]},{"type":"image","version":"3.4.0","originX":"left","originY":"top","left":495,"top":308,"width":64,"height":64,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"http://localhost:63342/canvas-editor/src/img/test.png","filters":[{"type":"Grayscale","mode":"average"}]}],"background":"#aaa"}')

canvas.set({
  transparentCorners: false,
  cornerColor: 'blue',
  cornerStrokeColor: 'red',
  borderColor: 'red',
  cornerSize: 12,
  padding: 10,
  cornerStyle: 'circle',
  borderDashArray: [3, 3]
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
  scaleRatio = Math.min(width*0.8 / 854, height*0.8 / 480);
  canvas.setDimensions({ width: 854 * scaleRatio, height: 480 * scaleRatio });
  canvas.setZoom(scaleRatio);
}

window.addEventListener("load", resize);
window.addEventListener("resize", resize);
