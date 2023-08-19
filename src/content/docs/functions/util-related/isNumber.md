---
title: $isNumber
description: $isNumber will check if the given argument is a number.
id: isNumber
---

`$isNumber` will check if the given argument is a number.

## Usage

```php
$isNumber[num]
```

## Parameters

| Field | Type   | Description                                 | Required |
| ----- | ------ | ------------------------------------------- | :------: |
| num   | number | Argument you want to check if its a number. |   true   |

## Example(s)

This will return `true` as `255` is a valid number:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
