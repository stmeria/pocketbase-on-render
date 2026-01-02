/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date481947238",
    "max": "",
    "min": "",
    "name": "castdate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text772555674",
    "max": 0,
    "min": 0,
    "name": "pournumber",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text18589324",
    "max": 0,
    "min": 0,
    "name": "notes",
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
  collection.fields.removeById("date481947238")

  // remove field
  collection.fields.removeById("text772555674")

  // remove field
  collection.fields.removeById("text18589324")

  return app.save(collection)
})
