game.splash("\"This program will calculate the area of a trapezoid\"")
let height = game.askForNumber("Height")
let base1 = game.askForNumber("Base 1 length")
let base2 = game.askForNumber("Base 2 length")
let area = (base1 + base2) / 2 * height
game.splash(area)
