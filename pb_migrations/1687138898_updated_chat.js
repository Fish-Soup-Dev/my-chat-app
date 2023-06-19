migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qkcz4o7wj46tqr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q44i20wc",
    "name": "messages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wy92v0gywh1jyml",
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
  collection.schema.removeField("q44i20wc")

  return dao.saveCollection(collection)
})
