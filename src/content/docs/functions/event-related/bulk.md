---
title: $bulk
description: $bulk will hold data for the bulk delete command. (messageDeleteBulk event)
id: bulk
---

`$bulk` will hold data for the bulk delete command. (messageDeleteBulk event)

## Usage

```php
$bulk[option]
```

## Parameters

| Field   | Type   | Description                                                                                                                                                                                                                                                                                    | Required |
| ------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| option? | string | Option to retrieve. <br /> 1. **messages** <br /> 2. **ids** <br /> 3. **createdTimestamp** <br /> 4. **createdAt** <br /> 5. **userIds** <br /> 6. **usernames** <br /> 7. **userMentions** <br /> 8. **guildID** <br /> 9. **guildName** <br /> 10. **channelID** <br /> 11. **channelName** |   true   |
