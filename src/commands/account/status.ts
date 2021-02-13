import Command from '../../base'

export default class AccountStatus extends Command {
  static description = `Returns the status of the current account.
Returns the current account status (billing).
`

  private cmd = 'account-status'

  static flags = {
    ...Command.flags
  }

  parse_flags() {
    return this.parse(AccountStatus)
  }

  get_cmd() {
    return this.cmd
  }
}
