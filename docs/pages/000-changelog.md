## 1.10
- Add first clear rewards
- Add achievement system. Have to updates, for `Gamespark`, have to add new game data: `playerAchievement` with following indexes: id (string), playerId (string), dataId (string), timestamp (Number). For `PHP Service`, download latest version from `https://github.com/insthync/rpg-php-service/releases`, then browse `{{service url}}/sql-importer.php?update=1.10`.
- Implement buff's clear buffs
- Implement buff's clear nerfs
- Implement buff's stun

## 1.09
- Add lootbox animation scene, developer may use it to show summon animation
- Add debug option to `Web Service Client` to show web-service result in console log
- Implement gameplay rule class, developer can extends `Base Gameplay Rule` class to change damage, critical rate, block rate calculation formula. And can change gameplay rule at `Game Instance`

## 1.08e
- Fix invalid asmdef location that causes an error when build

## 1.08d
- Fix no selection in Create Scriptable Object window

## 1.08c
- Add sample of character level up animation scene
- Add sample of character evlove animation scene
- Can see 3D character model via character codex UI

## 1.08b
- Fix some UIs not able to access
- Fix invalid select arena formation
- Show increasing exp characters when win the battle

## 1.08
- Add critical, block attributes to character
- Add resistance attribute to character / equipment / skill buff, this is chance to prevent application of a nerf effect
- Add codex which you can see unlock character / equipment here

## 1.07c
- Fix invalid script filename
- Fix invalid arena formation
- Remove `NO_MAGIC_STATS;NO_EVADE_STATS` from `Scripting Define Symbol`

## 1.07b
- Fix invalid stamina calculation issues
- Add web-service client

## 1.07
- Add arena system, with ranking and rank-up rewards

## 1.06b
- Fix invalid predefine conditions

## 1.06
- In-App purchasing, players can receive hard currency (GEM) from IAP packages
- Show stamina restore count down
- Fix environment object instantiates too many time at initializing state
- Fix invalid stats calculation
- Fix character scale forced to be 1

## 1.05
- Add Social System, you can choose helper guy to help you in battle
- Can send friend request
- Can accept / decline friends
- Can delete friends

## 1.04
- Add SQLite Game Service, I decided to add it to make local database works on iOS devices so customer should use SQLite Game Service instead of LiteDB Game Service

## 1.03
- Remove obsolete fields
- Improve editor for more ease of use
- Add new way to set animation data by clip instead

## 1.02
- Multiple loot box
- Add miss combat text
- Bugs fixes
- Gamesparks integration (<a href="https://medium.com/suriyun-production/turnbase-rpg-template-gamesparks-integration-8a8838984d99">Guide</a>)

## 1.01
- Add equipment system
- Add loot box system