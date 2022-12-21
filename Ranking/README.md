![current avtar icon](https://cdn.discordapp.com/avatars/705577985020788747/e29103045b6e0ab4f7502859c4998a17.webp)

![Generic badge](https://img.shields.io/badge/Project%20Started-February%2024th%202020-orange)
![Website people.scs.carleton.ca](https://img.shields.io/website-up-down-green-red/http/people.scs.carleton.ca)
![GitHub issues](https://img.shields.io/github/issues/Videowelder/Ranker)

# Ranker

Javascript-based Discord bot that ranks member activeness (Number of messages, how long on call, reactions given) and presents it.
**The above code is STILL IN DEVELOPEMENT AND IS DEFINITELY NOT IN CORRECT WORKING ORDER**

## Add to your server

Even though the code here isn't ready, the bot is mostly working and the latest stable build is up for testing. Feel free to check it out and file an issue if you find any:

[Add to server](https://discord.com/api/oauth2/authorize?client_id=705577985020788747&permissions=0&scope=bot)

## Features

| * | Optional |
| ----------- | ----------- |
| [  ] | Input |

---

### Current

#### Messages

``!rank *[-d]`` - Displays activity in EXP. Add ``-d`` for EXP of individual sections.

``!gap [@user1] [@user2]`` - EXP and level gap between two users.

``!restamp`` - Reset the timestamp that is used for a future feature (see ``!estimate``).

``!clear my ranking please and thank you!`` - Reset everything for that user.

#### Reactions

React to a message and you get EXP

#### Voice

Rated by the minute

---

### Planned

``!estimate lv[x]`` - Predict how long it will take to reach a certain level based on the EXP change since the initial timestamp.

``!estimate [@user]`` - Predict how long it will take to reach another user based on the EXP change since the initial timestamp.

``!dist`` - Print a chart showing the EXP distribution of the server and where the user is on it.
