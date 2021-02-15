import Command from '../../base'

export default class AccountStatus extends Command {
  static description = `Returns the status of the current account.
Returns the current account status (billing).
`

  protected cmd = 'account-status'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(AccountStatus)
  }
}
