migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qkcz4o7wj46tqr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xsbuwzki",
    "name": "members",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qkcz4o7wj46tqr")

  // remove
  collection.schema.removeField("xsbuwzki")

  return dao.saveCollection(collection)
})
