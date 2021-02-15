# Game Service

This component will be attached to the same game object with `GameInstance`, it will contains functions to connect to backend-services to do something such as register, login, save game data.

The base class will contains only 2 events are `onServiceStart` which will be invoked before connect to backend-services, you may use it to show loading messages. And `onServiceFinish` which will be invoked after received response from backend-services, you may use it to hide loading messages.

There are following implemented classes in this project:
- `LiteDbGameService` it's a fake service which made for offline games, which storing data by using [LiteDB](https://github.com/mbdavid/litedb).
- `SQLiteGameService` it's a fake service like `LiteDbGameService` but storing data to SQLite. It was made later because the `LiteDB` one having problems on mobile platforms.
- `WebServiceClient` it's connecting to web-service which you can find its backend-side PHP web-service [here](https://github.com/insthync/rpg-php-service).