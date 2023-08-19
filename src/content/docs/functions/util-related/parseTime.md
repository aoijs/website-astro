---
title: $parseTime
description: $parseTime will convert any human time to milliseconds.
id: parseTime
---

`$parseTime` will convert any human time to milliseconds.

## Usage

```php
$parseTime[time]
```

## Parameters

| Field | Type   | Description                              | Required |
| ----- | ------ | ---------------------------------------- | :------: |
| time  | string | The time that will be converted to `ms`. |   true   |

## Example(s)

This will convert `69 minutes` to milliseconds and return `4140000`:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[69m]
  `
});
```

This will convert `1w 2d 20m` to milliseconds and return `778800000`:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[1w 2d 20m]
  `
});
```
