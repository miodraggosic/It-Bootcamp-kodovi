
// import {generateList, generateItem as generateListItem} from './moduli/list.js';
// import {generateTable, generateTableRow, generateItem as generateTableItem} from './moduli/table.js';


// generateList('body');

// for (let i = 1; i <= 3; i++) {
//     generateListItem('ul', `./images/slika${i}.jfif`)
// }


// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// for (let i = 1; i <= 3; i++) {
//     let src = `./images/slika${i}.jfif`
//     generateTableItem(tr, src);
// }


import * as List from './moduli/list.js';
import * as Table from './moduli/table.js';


List.generateList('body');

for (let i = 1; i <= 3; i++) {
    List.generateItem('ul', `./images/slika${i}.jfif`)
}


let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
for (let i = 1; i <= 3; i++) {
    let src = `./images/slika${i}.jfif`
    Table.generateItem(tr, src);
}
