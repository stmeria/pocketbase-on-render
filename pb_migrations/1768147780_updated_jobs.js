/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2409499253")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "date2715733014",
    "max": "",
    "min": "",
    "name": "targetDeliveryDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "json1318862490",
    "maxSize": 0,
    "name": "quoteSnapshot",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "json3665657731",
    "maxSize": 0,
    "name": "issues",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2409499253")

  // remove field
  collection.fields.removeById("date2715733014")

  // remove field
  collection.fields.removeById("json1318862490")

  // remove field
  collection.fields.removeById("json3665657731")

  return app.save(collection)
})
