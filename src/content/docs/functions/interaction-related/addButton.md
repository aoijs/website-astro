---
title: $addButton
description: $addButton will add a button to the bot's message.
id: addButton
---

`$addButton` will add a button to the bot's message.

## Usage

```php
$addButton[index;label;style;customID;disabled?;emoji?]
```

## Parameters

| Field     | Type    | Description                                                                                                              | Required |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------ | :------: |
| index     | number  | In which (action)row the button appears.                                                                                 |   true   |
| label     | string  | The text that will be displayed on the button as label.                                                                  |   true   |
| style     | string  | The button **[style](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)**. |   true   |
| customID  | string  | The component custom ID used to identify the button.                                                                     |   true   |
| disabled? | boolean | Make the button unuseable/disabled? <br /> 1. **true** <br /> 2. **false** (default)                                     |  false   |
| emoji?    | string  | The emoji displayed in the button.                                                                                       |  false   |

<details open>
  <summary><h3> Button Types </h3></summary>

| Name          | Value | Color                    |                                                                                             |
| ------------- | ----- | ------------------------ | ------------------------------------------------------------------------------------------- |
| Primary       | 1     | blurple                  | `$addButton[1;Example Button!;primary;customID;false]`                                      |
| Secondary     | 2     | grey                     | `$addButton[1;Example Button!;secondary;customID;false]`                                    |
| Success       | 3     | green                    | `$addButton[1;Example Button!;success;customID;false]`                                      |
| Danger        | 4     | red                      | `$addButton[1;Example Button!;danger;customID;false]`                                       |
| Link          | 5     | grey, navigates to a URL | `$addButton[1;Example Button!;link;https://discord.gg;false]`                               |
| Custom Emoji  | any   | any                      | `$addButton[1;Example Button!;link;customID;false;emojiName,emojiID,animated (true/false)]` |
| Unicode Emoji | any   | any                      | `$addButton[1;Example Button!;link;customID;false;😀]`                                       |

</details>

## Example(s)

This adds a primary and link button to the bot's message:

```javascript
bot.command({
    name: 'addButton',
    code: `
    Hello!
    $addButton[1;Example Button!;primary;exampleButton;false;💔]
    $addButton[1;Example Button!;link;https://discord.gg;false]
  `
});
```
```javascript
bot.interactionCommand({
    name: 'exampleButton',
    prototype: 'button',
    code: `
    $interactionReply[Awesome Button Interaction!]
  `
});
```