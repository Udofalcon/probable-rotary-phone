var rows = 16;
var columns = 16;
var cells = [];
var map = document.getElementById('map');

for (var x = 0; x < rows; x++) {
    var row = document.createElement('tr');

    cells[x] = [];

    for (var y = 0; y < columns; y++) {
        var cell = document.createElement('td');
        var img = document.createElement('img');

        cells[x][y] = {
            img: './clay.png'
        };
        img.setAttribute('src', cell[x][y].img);
        cells[x][y].elem = img;
        cell.appendChild(img);
        row.appendChild(cell);
    }

    map.appendChild(row);
}
