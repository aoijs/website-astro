---
title: $get
description: $get is used for retrieving temporary variables.
id: get
---

`$get` will retrieve temporary variables stored by `$let`.

## Usage

```php
$get[var]
```

## Parameters

| Field | Type   | Description                              | Required |
| ----- | ------ | ---------------------------------------- | :------: |
| var   | string | Temporary variable you want to retrieve. |   true   |

## Example(s)

This will return `Leref` from `$let`:

```javascript
bot.command({
  name: "get",
  code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`,
});
```
