# Character Effect Data and Game Effect

## Character Effect Data

`CharacterEffectData` is a collection of game effects which will be spawned when this hit target (enemy), it has 2 kinds of hit effects are: `bodyEffect` a game effect which will be spawned at enemy's `CharacterEntity` component -> `bodyEffectContainer` transform, and `floorEffect` a game effect which will be spawned at enemy's `Character Entity` component -> `floorEffectContainer` transform. It is part of `Damage`'s hit effect, `Skill Cast Animation Data`'s cast effects, and `Skill Buff`'s buff effects.

## Game Effect

This component will be instantiated to the scene when character receive damage, skill casting, buff applied, and so on. Up to where did you setup it. When this component awake, it will find particles and audio sources components to play them. So you can setup create a game object, then attach particle and audio source as you wish. 

You can see how I setup it in: `Demo/Prefabs/Gameplay/Effects` and how I use it in `Demo/Prefabs/Gameplay/Damages/` -> `MeleeDamage`, `RangeDamage` -> `Hit Effects`, for skill's buffs: `Demo/GameData/Characters/Skills` -> `SkillBlackKnight02`, `SkillMushroom01`, `SkillShaman02`, `SkillThief02` -> `Buffs` -> `Buffs Effects`.

### How it work #1 - Hit Effects

You can find how it was setup from the demo: `Demo/Prefabs/Gameplay/BaseHitEffect` which is part of `Demo/Prefabs/Gameplay/Damages/MeleeDamage` -> `Hit Effects`, then the `MeleeDamage` is part of `Demo/GameData/Characters/AttackAnimation/AnimMelee001` -> `Damage`, and the `AnimMelee001` is part of `Demo/GameData/Characters/BlackKnight` -> `Attack Animations`. 

When a character attacks it will play an attack animation by using data from `Attack Animations`, then while attacking it will spawn `Damage` which is a bullet, or arrow, or sword slash force, and so on up to how you want it to be, then when the `Damage` hit enemy it will spawn `BaseHitEffect` and play it as hit effect.

### How it work #2 - Buff Effects

You can find how it was setup from the demo: `Demo/Prefabs/Gameplay/BaseBuffEffect` which is part of `Demo/GameData/Characters/Skills/SkillBlackKnight02` -> `Buffs` -> `Buffs Effects`, and the `SkillBlackKnight02` is part of `Demo/GameData/Characters/BlackKnight` -> `Skills`. 

When a character use skill: `SkillBlackKnight02`, to apply buff and when buff applied it will spawn `BaseBuffEffect` and play it as buff effect.