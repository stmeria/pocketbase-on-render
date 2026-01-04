/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3615812858")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.admin = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3615812858")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"admin\""
  }, collection)

  return app.save(collection)
})
