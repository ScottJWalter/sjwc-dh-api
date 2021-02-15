import Command from '../../base'

export default class AccountUser extends Command {
  static description = `Returns disk and bandwidth usage for all visible users.
For all visible users, this returns information on disk
and bandwidth usage.
`

  protected cmd = 'account-user_usage'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(AccountUser)
  }
}
