import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class Database {

  // // OPTION A: Use static constructor
// SQLite.openDatabase({
//   name: 'data.db',
//   location: 'default'
// })
//   .then((db: SQLite) => {

//     db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {}).catch(() => {});

//   })
//   .catch(error => console.error('Error opening database', error);  

}




// // OPTION B: Create a new instance of SQLite
// let db = new SQLite();
// db.openDatabase({
//   name: 'data.db',
//   location: 'default' // the location field is required
// }).then(() => {
//   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {

//   }, (err) => {
//     console.error('Unable to execute sql: ', err);
//   });
// }, (err) => {
//   console.error('Unable to open database: ', err);
// });