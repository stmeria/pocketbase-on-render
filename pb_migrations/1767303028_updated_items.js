/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("relation1587448267")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1942858786",
    "hidden": false,
    "id": "relation1587448267",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
