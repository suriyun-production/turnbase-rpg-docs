# How total character attributes being calculated?

Character's attributes are sum by

- `Game Database` -> `Character Base Attributes`, it is base attributes for **ALL** characters, you will see it in game database.
- `Item Tier` -> `Attributes`, in item tier data, it has a `Attributes` setting which its amount can be increased by character's level.
- `Character Item` -> `Attributes`, in character item data, it has `Attributes` setting which its amount can be increased by character's level.
- `Randomed Attributes`, this will be randomed by `Character Item` -> `Random Attributes` setting.
- An equipped equipment items.

# How total equipment attributes being calculated

Equipment's attributes are sum by

- `Item Tier` -> `Attributes`, in item tier data, it has a `Attributes` setting which  its amount can be increased by item's level.
- `Equipment Item` -> `Attributes`, in equipment item data, it has `Attributes` setting which its amount can be increased by item's level.
- `Equipment Item` -> `Extra Attributes` in equipment item data, it has `Extra Attributes` settings which its amount is fixed, won't be increased by item's level.
- `Randomed Attributes`, this will be randomed by `Equipment Item` -> `Random Attributes` setting.