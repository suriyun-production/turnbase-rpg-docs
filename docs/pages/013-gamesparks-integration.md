# GameSparks Integration

Now we’ve Gamesparks integration, if you want to use Turnbase RPG game template with Gamesparks to keep players data to server, you have to register your Gamesparks account then create your game project in Gamesparks.

To use Gamesparks with your project, for client side, you have to download Gamesparks SDK from [https://docs.gamesparks.com/sdk-center/unity.html](https://docs.gamesparks.com/sdk-center/unity.html) (Download link is on top of the page), After import the package set GameSparks API Key and GameSparks API Secret in Gamesparks settings

![](../images/1OKB3lFNECmR-iWU1BINmBg.png)

Select to menu: GameSparks -> Edit Settings

![](../images/1aspWcHIekkLvXR8J5ggIGw.png)

Set Api Key/Secret that can copy from your Dashboard

Then download and import package to your project from [https://github.com/insthync/gamesparks-tbrpg-addons/releases](https://github.com/insthync/gamesparks-tbrpg-addons/releases)

Then in LoginScene remove “Lite Db Game Service” component from “GameInstance” then add “GS Game Service” and “Game Sparks Unity”

![](../images/1c1r9J9uGluqqJf5im-qx3w.png)

For server side, you have to create currencies to matches with client’s GameDatabase for example, the database have GOLD as soft currency and GEM as hard currency

![](../images/1xJwia2zLfTYiPshB3wfBcg.png)

Then you have to create GOLD and GEM currency in Gamesparks

![](../images/1qaWNaVLPZ93JHyjzfcsUiw.png)

![](../images/14S7V2r_Y0LqdjJVuTg8Aow.png)

Then create event named “SERVICE\_EVENT” with “TARGET” as String type and “DATA” as JSON type

![](../images/1aPzBBARrAnB5eAWtWPhGNg.png)

![](../images/1pfuI1_tFRTs3yvWql0rS-w.png)

Then download release cloud code from [https://github.com/insthync/CloudCode-GS-TBRPG](https://github.com/insthync/CloudCode-GS-TBRPG) then import it in cloud code section

![](../images/1zgSdwj4iNtzslq7War3fqQ.png)

![](../images/1y65Tl2HnqRzicdceXyQ8Pw.png)

Then when you have changes game content at your client you have to export data via “GS Game Service”’s context menu named “Export Game Database”

![](../images/1mD0G25nJmVzOTsatupDJ0A.png)

Save it anywhere then open it with Notepad (or another text editor) then copy its content and paste it to Cloud code -> Modules -> GAME\_DATA

![](../images/18UaG2FITAPjAK1MfLB7t8Q.png)

Then replace “game database” content

![](../images/1mX5OUwBbAHWyRchOchzawQ.png)

* * *

Then you have to add **Game Data**

Go to **Configurator -> Game Data**

![](../images/1bM-zFVBsAfaPvZ5a7QZOTg.png)

Then add following data with indexes

*   player — with following indexes: id (string)

![](../images/18I2qGpy3G4miPgSohWcIqA.png)

*   playerBattle — with following indexes: dataId (String), id (String), playerId (String), session (String), timestamp (Number)

![](../images/17_3j_1mDNXHjUhXqSiFk4g.png)

*   playerClearStage — with following indexes: dataId (String), id (String), playerId (String), timestamp (Number)

![](../images/1W8OMn7x8zCkAYWq4KOBKeg.png)

*   playerFormation — with following indexes: dataId (String), id (String), playerId (String), position (String), timestamp (Number)

![](../images/1MOEElweU1Ua-oBKzt79wAg.png)

*   playerItem — with following indexes: amount (Number), dataId (String), id (String), playerId (String), timestamp (Number)

![](../images/16xf6Q-juOUB9k658_EeP3Q.png)

*   playerStamina — with following indexes: dataId (String), id (String), playerId (String), timestamp (Number)

![](../images/1jOsK8zmHtq817ZHqA0I12g.png)

*   playerUnlockItem — with following indexes: dataId (String), id (String), playerId (String), timestamp (Number)

![](../images/1uL9DE1tIHgEGw6IMSlfnIA.png)

*   playerFriend — with following indexes: id (string), playerId (string), targetPlayerId (string), timestamp (Number)

![](../images/1jufcGpoPUNbih9bAgYZJYg.png)

*   playerFriendRequest — with following indexes: id (string), playerId (string), targetPlayerId (string), timestamp (Number)

![](../images/1_8PwbRb14lJLdSN1Dz2L2g.png)

*   playerAchievement — with following indexes: id (string), playerId (string), dataId (string), timestamp (Number)

So you will have data like this

![](../images/1OvbAq2ZULhuS6nlAHBI9NQ.png)

* * *

#### In-App Purchase Integration

From version 1.06 and above, it is already integrated In-App Purchase, but you will have to add integration data for GameSpark.

In your game dashboard, go to **Integrations** menu

![](../images/1Uxnq9vlEhjrPwGb5elxtMA.png)

Then set **Google App ID** and **Google Play Public Key**

*   **Google App ID** it is package name which you set in **Build Settings**, eg. com.suriyun.tbrpg
*   **Google Play Public Key**, you can find it in Google Play Console → App Dashboard

![](../images/1ooelIZmREB6ROdMqf8rGTQ.jpeg.png)

Then set Apple Bundle ID

*   **Apple Bundle ID** it is package name which you set in **Build Settings**, eg. com.suriyun.tbrpg

Then add Virtual Goods, each virtual good you have to set following data:

*   **Short Code**, use **Product ID** which you set in **IapPackage** data

![](../images/1albs5nbGbd6kBUVE5EP10w.png)

Use this value as short code

*   **Name**
*   **Description**
*   **iOS Product ID**, the product ID which you have set in Apple app store
*   **Google Product ID**, the product ID which you have set in Google Play console

![](../images/1zZ-pTCNaksqLaPYWehhRzw.png)

Here is example data that I’ve set for the Demo

![](../images/113J5cObaojge721QeUw_xA.png)