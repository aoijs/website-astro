---
title: $findSpecialChars
description: $findSpecialChars will return all special characters of the given argument.
id: findSpecialChars
---

`$findSpecialChars` will return all special characters of the given argument.

## Usage

```php
$findSpecialChars[text]
```

## Parameters

| Field | Type   | Description                                     | Required |
| ----- | ------ | ----------------------------------------------- | :------: |
| text  | string | Text where you want to find special characters. |   true   |

## Example(s)

This will return `######`:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
