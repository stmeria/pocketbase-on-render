/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number982622816",
    "max": null,
    "min": null,
    "name": "reorderpoint",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_710432678")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number982622816",
    "max": null,
    "min": null,
    "name": "reorder_point",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
