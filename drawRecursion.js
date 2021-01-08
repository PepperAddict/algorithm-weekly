const canvas = document.getElementById("draw");
const context = canvas.getContext("2d");




function createCircle(size, position = [300, 300]) {
  const X = position[0];
  const Y = position[1];

  context.lineWidth = 1;
  context.strokeStyle = "#00FFFF";

  context.beginPath();
  context.arc(X, Y, size, 0, 2 * Math.PI);
  context.stroke();

      if (size > 2) {
        //if multiply less than 1, it'll get smaller
        createCircle(size * 0.5, [X + size * 0.5, Y  + size * 0.6])
        createCircle(size * 0.5, [X - size * 0.5, Y - size * 0.6])
        createCircle(size * 0.5, [300, 300])
    }


}

function setup() {

    createCircle(200, [300, 300]);

}

setup();
