---
title: $message
description: $message will return given arguments of a message.
id: message
---

`$message` will return given arguments of a message.

## Usage

```php
$message[index?]
```

## Parameters

| Field  | Type    | Description                                                                          | Required |
| ------ | ------- | ------------------------------------------------------------------------------------ | :------: |
| index? | integer | Which message argument will be returned, leave it empty to return the whole message. |  false   |

## Example(s)

This will return your given message:

```javascript
bot.command({
  name: "message",
  code: `
  You said: "$message"
  `, // [prefix]message Hello!
});
```
