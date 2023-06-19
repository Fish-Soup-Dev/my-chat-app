migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wy92v0gywh1jyml")

  collection.name = "message"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wy92v0gywh1jyml")

  collection.name = "messages"

  return dao.saveCollection(collection)
})
