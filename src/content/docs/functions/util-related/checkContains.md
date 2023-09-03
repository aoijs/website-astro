---
title: $checkContains
description: $checkContains will check if the given arguments are present within a text.
id: checkContains
---

`$checkContains` will check if the given arguments are present within the text.

## Usage

```php
$checkContains[text;...chars]
```

## Parameters

| Field | Type   | Description                 | Required |
| ----- | ------ | --------------------------- | :------: |
| text  | string | Text you want to check.     |   true   |
| chars | string | Text you want to check for. |   true   |

## Example(s)

This will return `true` as `easy` and/or `simple` are present in the given text:

```javascript
bot.command({
  name: "checkContains",
  code: `
  $checkContains[aoi.js is easy and simple to use for beginners;easy;simple]
  `,
});
```
