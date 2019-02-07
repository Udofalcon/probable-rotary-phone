var rows = 16;
var columns = 16;
var cells = [];
var map = document.getElementById('map');
var start = {
    coordinates: [Math.floor(Math.random() * rows), Math.floor(Math.random() * columns)],
    img: './cloth_14.png'
};
var goal = {
    coordinates: [Math.floor(Math.random() * rows), Math.floor(Math.random() * columns)],
    img: './cloth_5.png'
};

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

cells[start.coordinates[0]][start.coordinates[1]].img = start.img;
cells[goal.coordinates[0]][goal.coordinates[1]].img = goal.img;
