# Game Database

Game database is important part, we’ll use it to collect an game data such as characters, items, stages, rewards

I’ve prepared the demo game database so might not want to create new game database but if you want, You can create new game database by right click on **Project** tab then choose **Create -> ScriptableObject (TurnbaseRPG)**

![](../images/CreateScriptableObject.png)

Then choose **GameDatabase**

![](../images/0ctgiVa_aTiS8qMYq.png)

Then new game database will be created

Then set game database in **GameInstance** which located in **LoginScene**

![](../images/05lzkHSKtGO-ZJucm.png)

In game database you can set following configs:

*   **Player Max Level** this is max level of player (not the characters or items).
*   **Player Exp Table** require exp for level up from level 1 to **Player Max Level** with growth factor.
*   **Soft Currency** this is currency which we will use it to Upgrade, Evolve items can receive by clear stage, sell items, you can set its **Icon** and **Start Amount** (Amount when start game).
*   **Hard Currency** this is currency which we will use it to random item from loot box, revive characters, you can set its **Icon** and **Start Amount** (Amount when start game).
*   **Custom Currencies** it's like soft-currency and hard-currency but for custom services exchange.
*   **Stage Stamina** this is required stamina to start battle, you can set its **Icon**, max amount from level 1 to **Player Max Level** with growth factor in **Max Amount Table, Recover Unit** and **Recover Duration**.
*   **Arena Stamina** this is required stamina to start duel, you can set its **Icon**, max amount from level 1 to **Player Max Level** with growth factor in **Max Amount Table, Recover Unit** and **Recover Duration**.
*   **Custom Staminas** it's like stage-stamina and arena-stamina but for custom services exchange.
*   **Formations** this is list of formation and its info.
*   **Items** this is list of all items, see more info at [Item](pages/004-item--item-tier-and-item-attributes).
*   **Stages** this is list of all stages, see more info at [Stage](pages/010-stage).
*   **Loot Boxes** this is list of all loot boxes, see more info at [Loot Box](pages/011-loot-box).
*   **In Game Packages** this is list of all in-game packages which can be bought by hard-currency.
*   **Iap Packages** this is list of all IAP packages which being used for hard-currency exchanging.
*   **Start Items** this is list of items that player will receives at beginning of the game.
*   **Start Characters** this is list of characters that player will receives at beginning of the game and will be set to the formation.
*   **Unlock Stages** this is list of stages that will be unlocked at beginning of the game, you should first stage here.
*   **Character Base Attributes**, this is base attributes for all characters, this will be sum with calculated character’s attributes.
*   **Revive Price**, required hard currency to revive all characters.
*   **Min Atk Vary Rate**, **Max Atk Vary Rate** are Rate that will be random by min and max value to multiply with attack damage.
*   **Reset Item After Evolve**, if this is True item level will be reset to 1 after evolve.
*   **Arena Ranks** each arena rank data will contains: **scoreToRankUp** if player's score reached this value, player's rank will be increased and earn next rank rewards (**rewardSoftCurrency**, **rewardHardCurrency** and **rewardItems**).
*   **Arena Win Score Increase** amount of score which will be increased when win a duel.
*   **Arena Lose Score Decrease** amount of score which will be decreased when lose a duel.
*   **Arena Environment** environment that will be appears while playing in duel scene.
*   **Clan Max Level** max clan level.
*   **Clan Exp Table** require exp for level up from level 1 to **Player Max Level** with growth factor
*   **Create Clan Currency Type** which currency is required to create clan.
*   **Create Clan Currency Amount** amount of currency which required to create clan.
*   **Clan Checkin Reward Clan Exp** amount of increasing clan exp when player check-in.
*   **Clan Donations** choices of clan donation, each of it contains following important settings: **id**, **requireCurrencyId** which you can set soft-currency Id or hard-currency Id or custom-currency Id, **requireCurrencyAmount** amount of currency which required for donation and **rewardClanExp** amount of increasing clan exp when player donate.