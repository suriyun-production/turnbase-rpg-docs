# Clan System

Current clan system contains following features:
- Clan creation with required currency.
- Clan join request sending.
- Clan join request can be deleted by requester.
- Clan join request can be accepted/declined by clan leader and manager.
- Clan member deleting by clan leader and manager.
- Clan owner transfer.
- Clan exit.
- Clan termiate.
- Clan level and exp.
- Clan check-in, which can increase clan exp. Each player can donate just one time per day.
- Clan donation, which can increase clan exp. Each player can donate just one time per day.

* * *

You can changes following settings in `GameDatabase`:
- `Clan Max Level` max clan level.
- `Clan Exp Table` require exp for level up from level 1 to `Player Max Level` with growth factor
- `Create Clan Currency Type` which currency is required to create clan.
- `Create Clan Currency Amount` amount of currency which required to create clan.
- `Clan Checkin Reward Clan Exp` amount of increasing clan exp when player check-in.
- `Clan Donations` choices of clan donation, each of it contains following important settings: `id`, `requireCurrencyId` which you can set soft-currency Id or hard-currency Id or custom-currency Id, `requireCurrencyAmount` amount of currency which required for donation and `rewardClanExp` amount of increasing clan exp when player donate.