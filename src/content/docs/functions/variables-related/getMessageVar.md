---
title: $getMessageVar
description: $getMessageVar will return the value of a given message variable.
id: getMessageVar
---

`$getMessageVar` will return the value of a given message variable.

## Usage

```php
$getMessageVar[varname;guildID?;table?]
```

## Parameters

| Field      | Type    | Description     | Required |
| ---------- | ------- | --------------- | :------: |
| varname    | string  | Variable name.  |   true   |
| messageID? | integer | message ID      |  false   |
| table?     | string  | Variable table. |  false   |

## Example(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
  name: "getMessageVar",
  code: `
    $getMessageVar[Example;$messageID;main]
    `,
});
```
