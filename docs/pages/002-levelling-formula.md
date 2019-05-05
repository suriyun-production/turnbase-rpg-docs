* * *

![](../images/1-8wsUh8HvDr029jiolcp9A.png)

This is the guide for Turnbase RPG game template which selling at Unity Asset Store ([https://www.assetstore.unity3d.com/#!/content/107578?aid=1100lGeN](https://www.assetstore.unity3d.com/#!/content/107578?aid=1100lGeN))

Before we start, I’d like to tell you about the formula that I’ve use to calculate character stats, required exp, price and so on for this project, The formula is

Current\_Stat = Min\_Stat + (Max\_Stat — Min\_Stat) \*   
{\[(Current\_Level — 1) / (Max\_Level — 1)\] ^ Growth\_Factor}

While Min\_Stat is stat at level 1, Max\_Stat is stat at max level and Growth\_Factor is value determines how fast this stat growth, for example when Growth\_Factor equals to

*   0.7 The stat will grows faster at early levels then becomes much slower at later levels.
*   1 The stat will grows at a fixed value per each level.
*   1.5 The stat will grows slower at early levels then becomes much faster at later levels.

So every stats will have fields to set their are Min\_Stat, Max\_Stat and Growth\_Factor, Max\_Level will be set at difference place, so you don’t have to set stats for every levels just set min value, max value and growth factor