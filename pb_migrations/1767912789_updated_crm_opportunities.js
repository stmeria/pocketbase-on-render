/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2888577258")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_5Ypy6r5dzM` ON `crm_opportunities` (`quoteNumber`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2888577258")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
