import { openDB } from "idb";

const DATABASE_NAME = 'Location-Data';
const DATABASE_VERSION = 2;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
        db.createObjectStore("location");
    }
});


export class IDBService {

    async insertValues(data) {
        const db2 = await openDB(DATABASE_NAME, DATABASE_VERSION);
        return db2.add("location", data, data.key).then(result => {
            return result;
        });
    }

    async getData() {
        const db2 = await openDB("Location-Data", 2);
        return db2.getAll("location").then(result => {
            return result;
        });
    }

    async updateData(data) {
        const db2 = await openDB("Location-Data", 2);
        db2
            .put("location", data, data.key)
            .then(result => {
                console.log("Updated Data", result);
            })
            .catch(err => {
                console.error("Failed to Update data: ", err);
            });

        db2.close();
    }

    async deleteData(data) {
        const db2 = await openDB("Location-Data", 2);
        db2
            .delete("location", data.key)
            .then(result => {
                console.log("Data Deleted", result);
            })
            .catch(err => {
                console.error("Failed to Delte data: ", err);
            });

        db2.close();
    }

}