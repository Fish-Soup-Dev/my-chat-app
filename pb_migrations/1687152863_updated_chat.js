migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qkcz4o7wj46tqr")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.id ?= @collection.chat.members.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9qkcz4o7wj46tqr")

  collection.listRule = null

  return dao.saveCollection(collection)
})
