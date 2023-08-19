---
title: $interactionReply
description: $interactionReply allows you to send an interaction message reply.
id: interactionReply
---

`$interactionReply` allows you to send an interaction message reply.

## Usage

```php
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?]
```

## Parameters

| Field            | Type    | Description                                                                          | Required |
| ---------------- | ------- | ------------------------------------------------------------------------------------ | :------: |
| content?         | string  | Message content.                                                                     |  false   |
| embeds?          | string  | Embed parser.                                                                        |  false   |
| components?      | string  | Component parser.                                                                    |  false   |
| files?           | string  | File Parser.                                                                         |  false   |
| allowedMentions? | string  | Allowed mentions? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users**     |  false   |
| ephemeral?       | boolean | Visible to the command author only? <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

```javascript
bot.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hello, world!;;;;everyone;false]
  `
});
```
