/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(17, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text942671923",
    "max": 0,
    "min": 0,
    "name": "pieceMark",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("text942671923")

  return app.save(collection)
})
