---
title: $addThreadMember
description: $addThreadMember will add a member to a thread.
id: addThreadMember
---

`$addThreadMember` will add a member to a thread.

## Usage

```php
$addThreadMember[channelID;threadID;userID;reason]
```

## Parameters

| Field     | Type    | Description                                                  | Required |
| --------- | ------- | ------------------------------------------------------------ | :------: |
| channelID | integer | Channel ID of where the thread is located.                   |   true   |
| threadID  | integer | The thread ID.                                               |   true   |
| userID    | integer | The user that should be added to the thread.                 |   true   |
| reason    | string  | The reason that will be displayed in the guild's audit logs. |   true   |

## Example(s)

This will create a thread and add random user to it:

```javascript
bot.command({
    name: 'addThreadMember',
    code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
