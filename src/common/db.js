import {config} from './config';
import {MongoClient} from 'mongodb';

const setDocumentOperation = function (db, doc, table ) {
  const collection = db.collection(table);
  return collection.insert(doc);
}

const getDocumentOperation = function (db, queryObj, table ) {
  const collection = db.collection(table);
  return collection.find(queryObj).limit(1).toArray();
}

const performDbOperation = function (operation, ...args) {
  return MongoClient.connect(config.db.url, { useNewUrlParser: true })
  .then(function(db) {
    const dbo = db.db(config.db.dbName)
    return operation(dbo, ...args)
    .then(res => {
        db.close();
        return res;
      })
    .catch(err => console.error(err)); 
  })
  .catch(err => console.error(err));
}

const setDocument = performDbOperation.bind(null, setDocumentOperation);
const getDocument = performDbOperation.bind(null, getDocumentOperation);

export {setDocument, getDocument}