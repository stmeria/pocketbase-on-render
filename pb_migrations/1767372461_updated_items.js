/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date481947238",
    "max": "",
    "min": "",
    "name": "CastDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date481947238",
    "max": "",
    "min": "",
    "name": "castDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
