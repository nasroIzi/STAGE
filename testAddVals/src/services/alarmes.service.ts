import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchDB';

@ Injectable()
export class AlarmeService{

    private _db;
    private _alarmes;

    initDB(){
        this._db = new PouchDB('alarmes',{ adapter : 'websql'});
    }

    add(alarme){
        return this._db.post(alarme);
    }

    update(alarme){
        return this._db.put(alarme);
    }

    delete(alarme){
        return this._db.remove(alarme);
    }

    getAll(){

        if(!this._alarmes)
        {
            return this._db.allDocs({ include_docs: true })
                .then (docs => 
                {
                    // Each row has a .doc object and we just want to send an 
                    // array of birthday objects back to the calling controller,
                    // so let's map the array to contain just the .doc objects.
                    this._alarmes = docs.rows.map(row => 
                    {
                    // Dates are not automatically converted from a string.
                    row.doc.Date = new Date(row.doc.Date);
                    return row.doc;
                    });
            
                    // Listen for changes on the database.
                    this._db.changes({ live : true, since : 'now', include_docs: true})
                        .on('change',this.onDatabaseChange);
            
                    return this._alarmes;
                });
        } else {
            // Return cached data as a promise
             return Promise.resolve(this._alarmes); 
        }
    }

    private onDatabaseChange = (change) => {  
    var index = this.findIndex(this._alarmes, change.id);
    var alarme = this._alarmes[index];

    if (change.deleted) {
        if (alarme) {
            this._alarmes.splice(index, 1); // delete
        }
    } else {
        change.doc.Date = new Date(change.doc.Date);
        if (alarme && alarme._id === change.id) {
            this._alarmes[index] = change.doc; // update
        } else {
            this._alarmes.splice(index, 0, change.doc) // insert
        }
    }
}

// Binary search, the array is by default sorted by _id.
private findIndex(array, id) {  
    var low = 0, high = array.length, mid;
    while (low < high) {
    mid = (low + high) >>> 1;
    array[mid]._id < id ? low = mid + 1 : high = mid
    }
    return low;
}
}

