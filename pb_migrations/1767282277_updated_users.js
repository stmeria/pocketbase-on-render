/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select4149945684",
    "maxSelect": 1,
    "name": "Role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "admin",
      "staff"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("select4149945684")

  return app.save(collection)
})
