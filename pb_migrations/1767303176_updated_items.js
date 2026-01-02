/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2854705901",
    "max": 0,
    "min": 0,
    "name": "bin",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text800313582",
    "max": 0,
    "min": 0,
    "name": "project",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text105650625",
    "max": 0,
    "min": 0,
    "name": "category",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4112659446",
    "max": 0,
    "min": 0,
    "name": "vendor",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "number1087382616",
    "max": null,
    "min": null,
    "name": "unitcost",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // remove field
  collection.fields.removeById("text2854705901")

  // remove field
  collection.fields.removeById("text800313582")

  // remove field
  collection.fields.removeById("text105650625")

  // remove field
  collection.fields.removeById("text4112659446")

  // remove field
  collection.fields.removeById("number1087382616")

  return app.save(collection)
})
