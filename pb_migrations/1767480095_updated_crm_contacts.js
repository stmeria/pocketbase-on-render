/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_174005470")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_kPheNR5MTV` ON `crm_contacts` (\n  `lastName`,\n  `email`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_174005470")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
