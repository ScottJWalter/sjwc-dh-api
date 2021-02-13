DreamHost API Command Line Interface
===========
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![TravisCI](https://api.travis-ci.com/ScottJWalter/sjwc-dh-api.svg)](https://travis-ci.com/github/ScottJWalter/sjwc-dh-api)
[![Codecov](https://codecov.io/gh/ScottJWalter/sjwc-dh-api/branch/develop/graph/badge.svg)](https://codecov.io/gh/ScottJWalter/sjwc-dh-api)
[![Version](https://img.shields.io/npm/v/sjwc-dh-api.svg)](https://npmjs.org/package/sjwc-dh-api)
[![Downloads/week](https://img.shields.io/npm/dw/sjwc-dh-api.svg)](https://npmjs.org/package/sjwc-dh-api)
[![License](https://img.shields.io/npm/l/sjwc-dh-api.svg)](https://github.com/ScottJWalter/sjwc-dh-api/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sjwc-dh-api
$ dh-api COMMAND
running command...
$ dh-api (-v|--version|version)
sjwc-dh-api/0.0.2 linux-x64 node-v12.16.3
$ dh-api --help [COMMAND]
USAGE
  $ dh-api COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dh-api account`](#dh-api-account)
* [`dh-api account:domain`](#dh-api-accountdomain)
* [`dh-api account:keys`](#dh-api-accountkeys)
* [`dh-api account:status`](#dh-api-accountstatus)
* [`dh-api account:user`](#dh-api-accountuser)
* [`dh-api config`](#dh-api-config)
* [`dh-api dns`](#dh-api-dns)
* [`dh-api dns:add`](#dh-api-dnsadd)
* [`dh-api dns:list`](#dh-api-dnslist)
* [`dh-api dns:remove`](#dh-api-dnsremove)
* [`dh-api domain`](#dh-api-domain)
* [`dh-api domain:available`](#dh-api-domainavailable)
* [`dh-api domain:domains`](#dh-api-domaindomains)
* [`dh-api domain:registrations`](#dh-api-domainregistrations)
* [`dh-api hello [STRING]`](#dh-api-hello-string)
* [`dh-api help [COMMAND]`](#dh-api-help-command)
* [`dh-api jabber`](#dh-api-jabber)
* [`dh-api jabber:add`](#dh-api-jabberadd)
* [`dh-api jabber:deactivate`](#dh-api-jabberdeactivate)
* [`dh-api jabber:domains`](#dh-api-jabberdomains)
* [`dh-api jabber:reactivate`](#dh-api-jabberreactivate)
* [`dh-api jabber:remove`](#dh-api-jabberremove)
* [`dh-api jabber:users`](#dh-api-jabberusers)
* [`dh-api list`](#dh-api-list)
* [`dh-api list:add`](#dh-api-listadd)
* [`dh-api list:lists`](#dh-api-listlists)
* [`dh-api list:post`](#dh-api-listpost)
* [`dh-api list:remove`](#dh-api-listremove)
* [`dh-api list:subscribers`](#dh-api-listsubscribers)
* [`dh-api mail`](#dh-api-mail)
* [`dh-api mail:add`](#dh-api-mailadd)
* [`dh-api mail:list`](#dh-api-maillist)
* [`dh-api mail:remove`](#dh-api-mailremove)
* [`dh-api meta`](#dh-api-meta)
* [`dh-api meta:commands`](#dh-api-metacommands)
* [`dh-api meta:keys`](#dh-api-metakeys)
* [`dh-api mysql`](#dh-api-mysql)
* [`dh-api mysql:host`](#dh-api-mysqlhost)
* [`dh-api mysql:host:add`](#dh-api-mysqlhostadd)
* [`dh-api mysql:host:list`](#dh-api-mysqlhostlist)
* [`dh-api mysql:host:remove`](#dh-api-mysqlhostremove)
* [`dh-api mysql:user`](#dh-api-mysqluser)
* [`dh-api mysql:user:add`](#dh-api-mysqluseradd)
* [`dh-api mysql:user:list`](#dh-api-mysqluserlist)
* [`dh-api mysql:user:remove`](#dh-api-mysqluserremove)
* [`dh-api rewards`](#dh-api-rewards)
* [`dh-api rewards:add`](#dh-api-rewardsadd)
* [`dh-api rewards:details`](#dh-api-rewardsdetails)
* [`dh-api rewards:disable`](#dh-api-rewardsdisable)
* [`dh-api rewards:enable`](#dh-api-rewardsenable)
* [`dh-api rewards:list`](#dh-api-rewardslist)
* [`dh-api rewards:log`](#dh-api-rewardslog)
* [`dh-api rewards:remove`](#dh-api-rewardsremove)
* [`dh-api rewards:summary`](#dh-api-rewardssummary)
* [`dh-api services`](#dh-api-services)
* [`dh-api services:fivencoder`](#dh-api-servicesfivencoder)
* [`dh-api services:progress`](#dh-api-servicesprogress)
* [`dh-api user`](#dh-api-user)
* [`dh-api user:add`](#dh-api-useradd)
* [`dh-api user:list`](#dh-api-userlist)
* [`dh-api user:remove`](#dh-api-userremove)

## `dh-api account`

Account API Overview

```
USAGE
  $ dh-api account

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  The Account module provides commands to check usage and
  status of your account.
```

_See code: [src/commands/account/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/account/index.ts)_

## `dh-api account:domain`

Returns bandwidth usage for all visible domain services

```
USAGE
  $ dh-api account:domain

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return

DESCRIPTION
  Bandwidth usage is counted from the beginning of the
  current billing cycle (which, itself, can be determined
  by using account:status).
```

_See code: [src/commands/account/domain.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/account/domain.ts)_

## `dh-api account:keys`

List all SSH public keys on this account.

```
USAGE
  $ dh-api account:keys

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return

DESCRIPTION
  Returns a list of all public SSH keys associated with
  this account.

  NOTE:  If individual users have their own key(s), you
         will NOT be able to see them.
```

_See code: [src/commands/account/keys.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/account/keys.ts)_

## `dh-api account:status`

Returns the status of the current account.

```
USAGE
  $ dh-api account:status

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return

DESCRIPTION
  Returns the current account status (billing).
```

_See code: [src/commands/account/status.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/account/status.ts)_

## `dh-api account:user`

Returns disk and bandwidth usage for all visible users.

```
USAGE
  $ dh-api account:user

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return

DESCRIPTION
  For all visible users, this returns information on disk
  and bandwidth usage.
```

_See code: [src/commands/account/user.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/account/user.ts)_

## `dh-api config`

configure the CLI

```
USAGE
  $ dh-api config

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/config.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/config.ts)_

## `dh-api dns`

DNS API

```
USAGE
  $ dh-api dns

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/dns/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/dns/index.ts)_

## `dh-api dns:add`

dns:add

```
USAGE
  $ dh-api dns:add

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return
```

_See code: [src/commands/dns/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/dns/add.ts)_

## `dh-api dns:list`

dns:list

```
USAGE
  $ dh-api dns:list

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/dns/list.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/dns/list.ts)_

## `dh-api dns:remove`

dns:remove

```
USAGE
  $ dh-api dns:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/dns/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/dns/remove.ts)_

## `dh-api domain`

Domain API

```
USAGE
  $ dh-api domain

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/domain/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/domain/index.ts)_

## `dh-api domain:available`

domain:available

```
USAGE
  $ dh-api domain:available

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/domain/available.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/domain/available.ts)_

## `dh-api domain:domains`

domain:domains

```
USAGE
  $ dh-api domain:domains

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/domain/domains.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/domain/domains.ts)_

## `dh-api domain:registrations`

domain:registrations

```
USAGE
  $ dh-api domain:registrations

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/domain/registrations.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/domain/registrations.ts)_

## `dh-api hello [STRING]`

this line always shows up here

```
USAGE
  $ dh-api hello [STRING]

ARGUMENTS
  STRING  [default: world] optional string to echo back

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

DESCRIPTION
  This line shows up here.
  testing, one, two three ...

EXAMPLE
  $ dh-api hello
  hello world from ../src/commands/hello.ts
```

_See code: [src/commands/hello.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/hello.ts)_

## `dh-api help [COMMAND]`

display help for dh-api

```
USAGE
  $ dh-api help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `dh-api jabber`

Jabber API

```
USAGE
  $ dh-api jabber

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/jabber/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/index.ts)_

## `dh-api jabber:add`

jabber:add

```
USAGE
  $ dh-api jabber:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jabber/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/add.ts)_

## `dh-api jabber:deactivate`

jabber:deactivate

```
USAGE
  $ dh-api jabber:deactivate

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jabber/deactivate.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/deactivate.ts)_

## `dh-api jabber:domains`

jabber:domains

```
USAGE
  $ dh-api jabber:domains

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jabber/domains.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/domains.ts)_

## `dh-api jabber:reactivate`

jabber:reactivate

```
USAGE
  $ dh-api jabber:reactivate

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jabber/reactivate.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/reactivate.ts)_

## `dh-api jabber:remove`

jabber:remove

```
USAGE
  $ dh-api jabber:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jabber/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/remove.ts)_

## `dh-api jabber:users`

jabber:user

```
USAGE
  $ dh-api jabber:users

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/jabber/users.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/jabber/users.ts)_

## `dh-api list`

Announcement List API

```
USAGE
  $ dh-api list

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/list/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/list/index.ts)_

## `dh-api list:add`

list:add

```
USAGE
  $ dh-api list:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/list/add.ts)_

## `dh-api list:lists`

list:lists

```
USAGE
  $ dh-api list:lists

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list/lists.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/list/lists.ts)_

## `dh-api list:post`

list:post

```
USAGE
  $ dh-api list:post

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list/post.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/list/post.ts)_

## `dh-api list:remove`

list:remove

```
USAGE
  $ dh-api list:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/list/remove.ts)_

## `dh-api list:subscribers`

list:subscribers

```
USAGE
  $ dh-api list:subscribers

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list/subscribers.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/list/subscribers.ts)_

## `dh-api mail`

Mail API

```
USAGE
  $ dh-api mail

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mail/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mail/index.ts)_

## `dh-api mail:add`

mail:add

```
USAGE
  $ dh-api mail:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mail/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mail/add.ts)_

## `dh-api mail:list`

mail:list

```
USAGE
  $ dh-api mail:list

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mail/list.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mail/list.ts)_

## `dh-api mail:remove`

mail:remove

```
USAGE
  $ dh-api mail:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mail/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mail/remove.ts)_

## `dh-api meta`

API metacommands

```
USAGE
  $ dh-api meta

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return
```

_See code: [src/commands/meta/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/meta/index.ts)_

## `dh-api meta:commands`

meta:commands

```
USAGE
  $ dh-api meta:commands

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return
```

_See code: [src/commands/meta/commands.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/meta/commands.ts)_

## `dh-api meta:keys`

meta:keys

```
USAGE
  $ dh-api meta:keys

OPTIONS
  -a, --account=account  account to use
  -f, --format=format    format to return
```

_See code: [src/commands/meta/keys.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/meta/keys.ts)_

## `dh-api mysql`

MySQL API

```
USAGE
  $ dh-api mysql

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mysql/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/index.ts)_

## `dh-api mysql:host`

mysql:host

```
USAGE
  $ dh-api mysql:host

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mysql/host/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/host/index.ts)_

## `dh-api mysql:host:add`

mysql:host:add

```
USAGE
  $ dh-api mysql:host:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mysql/host/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/host/add.ts)_

## `dh-api mysql:host:list`

mysql:host:list

```
USAGE
  $ dh-api mysql:host:list

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mysql/host/list.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/host/list.ts)_

## `dh-api mysql:host:remove`

mysql:host:remove

```
USAGE
  $ dh-api mysql:host:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mysql/host/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/host/remove.ts)_

## `dh-api mysql:user`

mysql:user:index

```
USAGE
  $ dh-api mysql:user

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mysql/user/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/user/index.ts)_

## `dh-api mysql:user:add`

mysql:user:add

```
USAGE
  $ dh-api mysql:user:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mysql/user/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/user/add.ts)_

## `dh-api mysql:user:list`

mysql:user:list

```
USAGE
  $ dh-api mysql:user:list

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mysql/user/list.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/user/list.ts)_

## `dh-api mysql:user:remove`

mysql:user:remove

```
USAGE
  $ dh-api mysql:user:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mysql/user/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/mysql/user/remove.ts)_

## `dh-api rewards`

Rewards API

```
USAGE
  $ dh-api rewards

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/rewards/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/index.ts)_

## `dh-api rewards:add`

rewards:add

```
USAGE
  $ dh-api rewards:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/add.ts)_

## `dh-api rewards:details`

rewards:details

```
USAGE
  $ dh-api rewards:details

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/details.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/details.ts)_

## `dh-api rewards:disable`

rewards:disable

```
USAGE
  $ dh-api rewards:disable

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/disable.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/disable.ts)_

## `dh-api rewards:enable`

rewards:enable

```
USAGE
  $ dh-api rewards:enable

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/enable.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/enable.ts)_

## `dh-api rewards:list`

rewards:list

```
USAGE
  $ dh-api rewards:list

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/list.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/list.ts)_

## `dh-api rewards:log`

rewards:log

```
USAGE
  $ dh-api rewards:log

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/log.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/log.ts)_

## `dh-api rewards:remove`

rewards:remove

```
USAGE
  $ dh-api rewards:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/remove.ts)_

## `dh-api rewards:summary`

rewards:summary

```
USAGE
  $ dh-api rewards:summary

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rewards/summary.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/rewards/summary.ts)_

## `dh-api services`

Service Control API

```
USAGE
  $ dh-api services

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/services/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/services/index.ts)_

## `dh-api services:fivencoder`

services:fivencoder

```
USAGE
  $ dh-api services:fivencoder

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/services/fivencoder.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/services/fivencoder.ts)_

## `dh-api services:progress`

services:progress

```
USAGE
  $ dh-api services:progress

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/services/progress.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/services/progress.ts)_

## `dh-api user`

User API

```
USAGE
  $ dh-api user

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/user/index.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/user/index.ts)_

## `dh-api user:add`

user:add

```
USAGE
  $ dh-api user:add

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/user/add.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/user/add.ts)_

## `dh-api user:list`

user:list

```
USAGE
  $ dh-api user:list

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/user/list.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/user/list.ts)_

## `dh-api user:remove`

user:remove

```
USAGE
  $ dh-api user:remove

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/user/remove.ts](https://github.com/ScottJWalter/sjwc-dh-api/blob/v0.0.2/src/commands/user/remove.ts)_
<!-- commandsstop -->

---

## References

* https://help.dreamhost.com/hc/en-us/articles/217560167-API_overview
* https://oclif.io/
