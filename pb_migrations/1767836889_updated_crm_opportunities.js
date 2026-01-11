/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2888577258")

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text385579935",
    "max": 0,
    "min": 0,
    "name": "quoteNumber",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "date1914081394",
    "max": "",
    "min": "",
    "name": "quoteDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date3506635866",
    "max": "",
    "min": "",
    "name": "validUntil",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text553718305",
    "max": 0,
    "min": 0,
    "name": "projectName",
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
    "id": "text1170081413",
    "max": 0,
    "min": 0,
    "name": "projectLocation",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "number3097235076",
    "max": null,
    "min": null,
    "name": "subtotal",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "number2276504924",
    "max": null,
    "min": null,
    "name": "deliveryPrice",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "hidden": false,
    "id": "number3520795564",
    "max": null,
    "min": null,
    "name": "taxRate",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "number2957995209",
    "max": null,
    "min": null,
    "name": "taxAmount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "hidden": false,
    "id": "number3257917790",
    "max": null,
    "min": null,
    "name": "total",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "json4011715032",
    "maxSize": 0,
    "name": "quoteItems",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2888577258")

  // remove field
  collection.fields.removeById("text385579935")

  // remove field
  collection.fields.removeById("date1914081394")

  // remove field
  collection.fields.removeById("date3506635866")

  // remove field
  collection.fields.removeById("text553718305")

  // remove field
  collection.fields.removeById("text1170081413")

  // remove field
  collection.fields.removeById("number3097235076")

  // remove field
  collection.fields.removeById("number2276504924")

  // remove field
  collection.fields.removeById("number3520795564")

  // remove field
  collection.fields.removeById("number2957995209")

  // remove field
  collection.fields.removeById("number3257917790")

  // remove field
  collection.fields.removeById("json4011715032")

  return app.save(collection)
})
