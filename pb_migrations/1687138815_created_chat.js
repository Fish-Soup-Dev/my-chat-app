migrate((db) => {
  const collection = new Collection({
    "id": "9qkcz4o7wj46tqr",
    "created": "2023-06-19 01:40:15.723Z",
    "updated": "2023-06-19 01:40:15.723Z",
    "name": "chat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xcysolfh",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9qkcz4o7wj46tqr");

  return dao.deleteCollection(collection);
})
