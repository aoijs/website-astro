---
title: $commandInfo
description: $commandInfo will return the given text of a property.
id: commandInfo
---

`$commandInfo` will return the given text of a property.

## Usage

```php
$commandInfo[name;option]
```

## Parameters

| Field  | Type   | Description            | Required |
| ------ | ------ | ---------------------- | :------: |
| name   | string | Command name or alias. |   true   |
| option | string | Property to retrieve.  |   true   |

## Example(s)

This will return the usage (defined by added properties) of the command:

- You can add anything you'd like, for example "usage" as below.
- You can use aliases or the command name to return it's information.

```javascript
bot.command({
  name: "commandInfo",
  aliases: ["ci", "cmdInfo"],
  usage: "commandInfo [command]",
  code: `
  Usage: $commandInfo[ci;usage]
  `,
});
```
