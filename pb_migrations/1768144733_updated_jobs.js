/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2409499253")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date1008021896",
    "max": "",
    "min": "",
    "name": "scheduledDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date1542187598",
    "max": "",
    "min": "",
    "name": "etaDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "json3458754147",
    "maxSize": 0,
    "name": "summary",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2409499253")

  // remove field
  collection.fields.removeById("date1008021896")

  // remove field
  collection.fields.removeById("date1542187598")

  // remove field
  collection.fields.removeById("json3458754147")

  return app.save(collection)
})
