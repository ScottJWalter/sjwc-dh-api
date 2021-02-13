import Command from '../../base'

export default class AccountKeys extends Command {
  static description = `List all SSH public keys on this account.
Returns a list of all public SSH keys associated with
this account.

NOTE:  If individual users have their own key(s), you
      will NOT be able to see them.
`

  private cmd = 'account-domain_usage'

  static flags = {
    ...Command.flags
  }

  parse_flags() {
    return this.parse(AccountKeys)
  }

  get_cmd() {
    return this.cmd
  }
}
