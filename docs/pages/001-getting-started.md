# Getting Started

After imported the package, then we’re going to test the demo, click menu **File -> Build Settings**

![](../images/0VSVb8aZHV5DtWejD.png)

Then drag **LoginScene**, **ManageScene** and **BattleScene** from **/Assets/RPGGame/Demo/Scenes** to add them in **Scenes In Build** section.

*You will see `LoginScene`, `LoginSceneSQLite` and `LoginSceneWebService` their different is using game-service, you can find more info [here](pages/017-game-service)*

* * *

Go to your project folder then `/Packages` edit `manifest.json`, Add
```
 "com.unity.nuget.newtonsoft-json": "2.0.2"
```
Into dependencies

![](../images/json-deps.png)

* * *

Then set **Scripting Runtime Version** to **.NET 4.x Equivalent** and **Api Compatibility Level** to **.NET 4.x**

Click menu Edit → Project Settings → Player
![](https://cdn-images-1.medium.com/max/1600/0*1taaUXKewT6ZOVMc)

Then set **Scripting Runtime Version** to **.NET 4.x Equivalent** and **Api Compatibility Level** to **.NET 4.x**

![](https://cdn-images-1.medium.com/max/1600/0*AzhYdsPL_d-QrZFo)

If there is no **.NET 4.x** choice in **Api Compatibility Level**, you should try to close the editor and reopen the project again

* * *

Then you can try by press play button in the editor

![](../images/07jU_2JUhkUV6rIwR.png)

![](../images/0n9hgSh3YkRr6y3s6.png)
