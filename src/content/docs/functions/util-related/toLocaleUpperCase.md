---
title: $toLocaleUpperCase
description: $toLocaleUpperCase will change the first character of every word to uppercase.
id: toLocaleUpperCase
---

`$toLocaleUpperCase` will change the first character of every word to uppercase.

## Usage

```php
$toLocaleUpperCase[text]
```

## Parameters

| Field | Type   | Description                             | Required |
| ----- | ------ | --------------------------------------- | :------: |
| text  | string | The text to change to locale uppercase. |   true   |

## Example(s)

This will change every first character of a word to uppercase, in this case it would return `Hello, I'm Happy.`:

```javascript
bot.command({
  name: "toLocaleUpperCase",
  code: `
    $toLocaleUpperCase[hello, i'm happy.]
    `,
});
```
