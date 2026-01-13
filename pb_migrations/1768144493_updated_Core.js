/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3971108289")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_WzKxXHCsRL` ON `Core` (`quoteNumber`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
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
  collection.fields.addAt(2, new Field({
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
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4236875316",
    "max": 0,
    "min": 0,
    "name": "customerName",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "quoted",
      "negotiation",
      "won",
      "lost",
      "production",
      "shipped"
    ]
  }))

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
    "id": "number904457257",
    "max": null,
    "min": null,
    "name": "totalWeightLb",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number125405937",
    "max": null,
    "min": null,
    "name": "totalConcreteYd",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number2287302036",
    "max": null,
    "min": null,
    "name": "totalRebarLb",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_3971108289")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  // remove field
  collection.fields.removeById("text385579935")

  // remove field
  collection.fields.removeById("text553718305")

  // remove field
  collection.fields.removeById("text4236875316")

  // remove field
  collection.fields.removeById("select2063623452")

  // remove field
  collection.fields.removeById("date1008021896")

  // remove field
  collection.fields.removeById("date1542187598")

  // remove field
  collection.fields.removeById("number904457257")

  // remove field
  collection.fields.removeById("number125405937")

  // remove field
  collection.fields.removeById("number2287302036")

  // remove field
  collection.fields.removeById("text18589324")

  return app.save(collection)
})
