# Online Service Integration

## PHP Web Service

This project has a PHP web-service integration which you can see it from [https://github.com/insthync/rpg-php-service](https://github.com/insthync/rpg-php-service)

Its client integration was included in the package. As this is default online service.

## GameSparks Integrations

This is deprecated, if you still want to learn its codes, you can see it from following links:

Cloud codes: [https://github.com/insthync/CloudCode-GS-TBRPG](https://github.com/insthync/CloudCode-GS-TBRPG)

Client integration: [https://github.com/insthync/gamesparks-tbrpg-addons/releases](https://github.com/insthync/gamesparks-tbrpg-addons/releases)

Guide: [GameSparks Integration](pages/013-gamesparks-integration)

## How to integrate with your API

This project already prepare base class for your API so you can make your API to use with this package or integrate to use with Playfab or Gamespark (which I’ve already did it)

So when you are going to connect to your API, you have to create extend class from **BaseGameService** and implements an abstract methods to connect to your API (you can see [https://github.com/insthync/gamesparks-tbrpg-addons](https://github.com/insthync/gamesparks-tbrpg-addons) for example or [https://github.com/insthync/rpg-php-service](https://github.com/insthync/rpg-php-service))

I will add simple PHP API later after I’ve finished Social system