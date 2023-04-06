# Character Effect Data and Game Effect

## Character Effect Data

`CharacterEffectData` is a collection of game effects which will be spawned when this hit target (enemy), it has 2 kinds of hit effects are: `bodyEffect` a game effect which will be spawned at enemy's `CharacterEntity` component -> `bodyEffectContainer` transform, and `floorEffect` a game effect which will be spawned at enemy's `Character Entity` component -> `floorEffectContainer` transform. It is part of `Damage`'s hit effect, `Skill Cast Animation Data`'s cast effects, `Skill Buff`'s buff effects.

## Game Effect

This component will be instantiated to the scene when character receive damage, skill casting, buff applied, and so on. Up to where did you setup it. When this component awake, it will find particles and audio sources components to play them. So you can setup create a game object, then attach particle and audio source as you wish. You can see how I use it in `Demo/Prefabs/Gameplay/Effects`