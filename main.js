var rows = 16;
var columns = 16;
var cells = [];
var map = document.getElementById('map');
var start;
var goal;

for (var x = 0; x < rows; x++) {
    var row = document.createElement('tr');

    cells[x] = [];

    for (var y = 0; y < columns; y++) {
        var cell = document.createElement('td');
        var img = document.createElement('img');

        cells[x][y] = {
            coordinates: [x, y],
            img: './clay.png'
        };
        img.setAttribute('src', cells[x][y].img);
        cells[x][y].elem = img;
        cell.appendChild(img);
        row.appendChild(cell);
    }

    map.appendChild(row);
}

start = cells[Math.floor(Math.random() * rows)][Math.floor(Math.random() * columns)];
goal = cells[Math.floor(Math.random() * rows)][Math.floor(Math.random() * columns)];

start.img = './cloth_14.png';
goal.img = './cloth_5.png';

start.elem.setAttribute('src', start.img);
goal.elem.setAttribute('src', goal.img);
