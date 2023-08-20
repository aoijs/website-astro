---
title: Subcommands
description: This page covers everything about Subcommands of Application Commands.
id: interaction-subcommands
---

## Sub commands

Sub-commands are apart of slash commands and are used to add as the name already suggest sub commands to the regular slash command. Which does not only "bypass" the slash command limit but also allows you to properly structure your application commands.

## Creating Application Commands

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]
```

| Field             | Type            | Description                                                                                                    | Required |
| ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------- | :------: |
| guildID/global    | string, integer | The type of application command, either for every guild (global) or for one specific guild (specific guildID). |   true   |
| name              | string, number  | The actual slash command name that will be visible to the user.                                                |   true   |
| description       | string, number  | The slash command description that will be visible to the user.                                                |   true   |
| defaultPermission | string          | If the application command should syncronisate to the default permissions.                                     |   true   |
| type              | string          | The application command type (explained below)                                                                 |   true   |
| options?          | object          | Slash commands options.                                                                                        |   true   |

### Examples of creating Application Commands with sub commands

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[guildID/global;moderation;Moderation Commands!;true;slash;[
{
  "name": "kick",
  "description": "Kick someone of your guild!",
  "type": 1 
},
{
  "name": "ban",
  "description": "Ban someone of your guild!",
  "type": 1 
}
]]`
});
```

#### Creating Sub Commands with options

Creating sub commands with options or choices work basically the same as any other.

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[guildID/global;moderation;Moderation Commands!;true;slash;[
  {
    name: "kick",
    description: "Kick someone of your guild!",
    type: 1,
    options: [
      {
        name: "user",
        description: "Mention the user you want to kick",
        required: true,
        type: 6,
      },
      {
        name: "reason",
        description: "Reason",
        required: true,
        type: 3,
      },
    ],
  },
  {
    name: "ban",
    description: "Ban someone of your guild!",
    type: 1,
  },
];`
});
```

That would for example add two options called "user" and "reason", where reason is type 3, string and user type 6, mention (user).

### Preview of the Example

![preview](https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/application-commands.png)

## Replying to Sub commands

To interact with those we need to filter the different options of the "moderation" slash commands. We can do that with `$onlyIf` and some advanced functions.

```js
$onlyIf[$interactionData[options._subcommand]==sub_command_name;]
```

`$interactionData` contains information about the interaction, and we use `$onlyIf` to check if the subcommand matches ours. 

This will basically check for the sub command name and if it doesn't match it will block the command, so for our case it would look something like this..

```js
bot.interactionCommand({
    name: "moderation",
    prototype: "slash",
    code: `
    $interactionReply[You picked the **ban** sub command!]
    $onlyIf[$interactionData[options._subcommand]==ban;]`
})

bot.interactionCommand({
    name: "moderation",
    prototype: "slash",
    code: `
    $interactionReply[You picked the **kick** sub command!]
    $onlyIf[$interactionData[options._subcommand]==kick;]`
})
```

Here's the handler example (which has the ability to store multiple commands in the same file, therfore its compacter):

```js
module.exports = [{
    name: "moderation",
    prototype: "slash",
    type: "interaction",
    code: `
    $interactionReply[You picked the **ban** sub command!]
    $onlyIf[$interactionData[options._subcommand]==ban;]`
}, {
    name: "moderation",
    prototype: "slash",
    type: "interaction",
    code: `
    $interactionReply[You picked the **kick** sub command!]
    $onlyIf[$interactionData[options._subcommand]==kick;]`
}]
```
