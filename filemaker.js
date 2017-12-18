var fs = require('fs');
var file = fs.createWriteStream('demo.txt');

for(var i = 0; i <= 75000; i++) {
	file.write('Dashing through the snow \nIn a one horse open sleigh\nO\'er the fields we go\nLaughing all the way\nBells on bob tails ring\nMaking spirits bright\nWhat fun it is to laugh and sing\nA sleighing song tonight\n\nOh, jingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one horse open sleigh\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one horse open sleigh\n\nA day or two ago\nI thought I\'d take a ride\nAnd soon Miss Fanny Bright\nWas seated by my side\nThe horse was lean and lank\nMisfortune seemed his lot\nWe got into a drifted bank\nAnd then we got upsot\n\nOh, jingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one horse open sleigh\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one horse open sleigh yeah\n\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one horse open sleigh\nJingle bells, jingle bells\nJingle all the way\nOh, what fun it is to ride\nIn a one horse open sleigh\n\n');
}
file.end();
