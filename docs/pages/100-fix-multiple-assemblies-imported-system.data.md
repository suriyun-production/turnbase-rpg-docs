* * *

When you import package to Unity which its version higher than 2018.2.21 you may see the error

```
error CS1703: Multiple assemblies with equivalent identity have been imported 'X:\XXX\Assets\RPGGame\Plugins\SQLite\Common\System.Data.dll' and 'X:\XXX\Editor\XXX\System.Data.dll'. Remove one of the duplicate references.
```

You have to delete `System.Data` file from your project, find it in Unity editor → `Project` tab, just type `System.Data` then select the file and delete it.