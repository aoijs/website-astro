---
title: $isWidgetEnabled
description: $isWidgetEnabled will return either true or false depending on if the widget of the guild is enabled.
id: isWidgetEnabled
---

`$isWidgetEnabled` will return either true or false depending on if the widget of the guild is enabled.

## Usage

```php
$isWidgetEnabled[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return true or false depending on if the widget is enabled in the current guild:

```javascript
bot.command({
    name: 'isWidgetEnabled',
    code: `
  $isWidgetEnabled[$guildID]
  `
});
```
