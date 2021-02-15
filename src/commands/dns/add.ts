import Command from '../../base'

export default class DnsAdd extends Command {
  static description = 'dns:add'

  protected cmd = 'account-user_usage'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(DnsAdd)
  }
}
