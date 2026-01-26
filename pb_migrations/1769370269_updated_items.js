/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(20, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1777829812",
    "max": 0,
    "min": 0,
    "name": "yard_location",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "hidden": false,
    "id": "date1101213758",
    "max": "",
    "min": "",
    "name": "yard_entry_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "bool3390555978",
    "name": "yard_hold",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(23, new Field({
    "hidden": false,
    "id": "file907030498",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "yard_photos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("text1777829812")

  // remove field
  collection.fields.removeById("date1101213758")

  // remove field
  collection.fields.removeById("bool3390555978")

  // remove field
  collection.fields.removeById("file907030498")

  return app.save(collection)
})
