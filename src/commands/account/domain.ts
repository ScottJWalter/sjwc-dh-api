import Command from '../../base'

export class AccountDomain extends Command {
  static description = `Returns bandwidth usage for all visible domain services
Bandwidth usage is counted from the beginning of the
current billing cycle (which, itself, can be determined
by using account:status).
`

  protected cmd = 'account-domain_usage'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(AccountDomain)
  }
}
