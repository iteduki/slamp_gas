# slamp_gas
Chat with big :custom_emoji: in slack.

# Install

## Create slack app

Go to [Slack API: Applications.](https://api.slack.com/apps) and Create New app.

Setup application.
- <span style="background-color:gray">App Name</span>: Slamp_gas
- <span style="background-color:gray">Development Slack Team</span>: Select team installed application.


## Get access token
Get Legacy token or OAuth Access Token.

### ・Legacy token
Generate by [Legacy token generator](https://api.slack.com/custom-integrations/legacy-tokens).


### ・OAuth Access Token

1. Select <span style="background-color:gray">OAuth & Permissions</span> from Features menu.
2. Select Permission scopes below.
- Send messages as slamp_gas(chat:write:bot)
- Access the workspace’s emoji(emoji:read)
- Access user’s profile and workspace profile fields(users.profile:read)

1. <span style="background-color:gray">Save Changes.</span>
2. Get and copy OAuth Access Token.

## Setup GAS Project

1. Create GoogleAppsScript projct.
2. Copy and paste this source code and replace <span style="background-color:gray">{your access token}</span>.
3. Add [SlackApp](https://github.com/soundTricker/SlackApp) library.
4. Deply as web app.
 - <span style="background-color:gray">Execute the app as:</span> Me
 - <span style="background-color:gray">Who has access to the app:</span> Anyone, even anonymous
5. Deploy and authorize application.
6. Get and copy webapplication URL.

## Create Slash commands
In the slack application.

1. Select <span style="background-color:gray">Slack Commands</span> from Features menu.
2. <span style="background-color:gray">Create New Command</span>.
4. Setup Slack commands.
- <span style="background-color:gray">Command</span>: Slamp (or name yourself)
- <span style="background-color:gray">Request URL</span>: GAS appliction URL.
- <span style="background-color:gray">Short Description</span>: (ex:Stamp emoji)
- <span style="background-color:gray">Usage Hint</span>: :emoji:
4. <span style="background-color:gray">Save</span>.

## Install app
Select <span style="background-color:gray">OAuth & Permissions</span> from Features menu.

1. <span style="background-color:gray">Install App to Team</span>
2. <span style="background-color:gray">Authorize</span>


# Usage
type below in slack.

/stamp :custom_emoji: