let image = [
    ['.', '#', '#', '#', '.', '.'],
    ['.', '#', '.', '.', '#', '.'],
    ['.', '#', '#', '#', '.', '.'],
    ['.', '#', '.', '.', '.', '.'],
];
let image2 = [
    ['.', '.', 'x', 'x', '.', '.'],
    ['x', 'x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x'],
    ['.', '.', 'x', 'x', '.', '.'],
];
printMatrix = (image) => console.log(image.map((pixel) => pixel.join(" ")).join("\n"))
printMatrix(image);
printMatrix(image2)

function paintBucket(pixel, newColor, image) {
    let row = pixel[0]
    let collumn = pixel[1]
    if (image[row][collumn] == newColor) {
        return image
    }

    fill(row, collumn, image, newColor, image[row][collumn])
    return image;

    function fill(row, collumn, image, newColor, oldColor) {

        if (row < 0 || row >= image.length || collumn < 0 || collumn >= image[row].length || image[row][collumn] != oldColor) {
            return;
        }
        image[row][collumn] = newColor;
        fill(row + 1, collumn, image, newColor, oldColor)
        fill(row - 1, collumn, image, newColor, oldColor)
        fill(row, collumn + 1, image, newColor, oldColor)
        fill(row, collumn - 1, image, newColor, oldColor)
    }
}

printMatrix(paintBucket([3, 5], 'A', image))
printMatrix(paintBucket([0, 2], 'a', image2))