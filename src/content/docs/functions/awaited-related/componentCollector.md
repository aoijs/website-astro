---
title: $componentCollector
description: $componentCollector will create a collector for the given components.
id: componentCollector
---

`$componentCollector` will create a collector for the given components.

## Usage

```php
$componentCollector[messageID;userFilter;time;customIDs;commands;errorMsg?;endcommand?;awaitData?]
```

## Parameters

| Field       | Type    | Description                                                                                     | Required |
| ----------- | ------- | ----------------------------------------------------------------------------------------------- | :------: |
| messageID   | integer | The message ID.                                                                                 |  true    |
| userFilter  | string  | To what the bot will reply. <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |  true    |
| time        | string  | When the command ends/expires.                                                                  |  true    |
| customID    | string  | The component ID.                                                                               |  true    |
| commands    | string  | Commands that will be executed, you can separate multiple emojis with a comma ( `,` ).          |  true    |
| errorMsg?   | string  | Error message when command expires.                                                             |  false   |
| endcommand? | integer | End command which will be executed when previous commands were executed.                        |  false   |
| awaitData?  | string  | Awaited Data.                                                                                   |  false   |
