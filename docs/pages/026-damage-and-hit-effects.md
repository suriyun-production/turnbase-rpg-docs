# Damage Component

`Damage` component is which will be instantiated when character attack an enemies, can use it as bullet, arrow, sword slash force and so on.

It have following settings:

- `hitEffects` ([CharacterEffectData](./027-character-effect-data-and-game-effect.md)) collection of game effects which will be spawned when this hit target (enemy), it has 2 kinds of hit effects are: `bodyEffect` a game effect which will be spawned at enemy's `CharacterEntity` component -> `bodyEffectContainer` transform, and `floorEffect` a game effect which will be spawned at enemy's `CharacterEntity` component -> `floorEffectContainer` transform.
- `missileSpeed` move to target (enemy) speed, if this is set to <= `0`, it will be moved to target's position immediately.
- `hitSpawnMode` target where this will be moved to, if this is set to `HitAtBody` it will moved to position at enemy's `CharacterEntity` component -> `bodyEffectContainer` transform, if this set to `HitAtFloor` it will moved to position at enemy's `CharacterEntity` component -> `floorEffectContainer` transform.
- `spawnOffsetY` position offset in Y axis, this is offsets for its spawn position, and offsets for its target.