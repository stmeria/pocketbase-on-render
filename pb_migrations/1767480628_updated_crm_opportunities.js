/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2888577258")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_174005470",
    "hidden": false,
    "id": "relation2182840471",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "primaryContact",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select3262944105",
    "maxSelect": 1,
    "name": "stage",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Lead",
      "Qualified",
      "Quoted",
      "Negotiation",
      "Won",
      "Lost"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number3735973451",
    "max": 100,
    "min": 0,
    "name": "probability",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number3310006673",
    "max": null,
    "min": null,
    "name": "estimatedValue",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date3924052725",
    "max": "",
    "min": "",
    "name": "bidDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "date1797306842",
    "max": "",
    "min": "",
    "name": "expectedCloseDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1602912115",
    "maxSelect": 1,
    "name": "source",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Referral",
      "Website",
      "Cold Call",
      "Repeat",
      "Other"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor18589324",
    "maxSize": 0,
    "name": "notes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3052500567",
    "max": 0,
    "min": 0,
    "name": "relatedProject",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2888577258")

  // remove field
  collection.fields.removeById("relation2182840471")

  // remove field
  collection.fields.removeById("select3262944105")

  // remove field
  collection.fields.removeById("number3735973451")

  // remove field
  collection.fields.removeById("number3310006673")

  // remove field
  collection.fields.removeById("date3924052725")

  // remove field
  collection.fields.removeById("date1797306842")

  // remove field
  collection.fields.removeById("select1602912115")

  // remove field
  collection.fields.removeById("editor18589324")

  // remove field
  collection.fields.removeById("text3052500567")

  return app.save(collection)
})
