import Command from '../../base'

export default class DnsAdd extends Command {
  static description = 'dns:add'

  private cmd = 'account-user_usage'

  static flags = {...Command.flags}

  parse_flags() {return this.parse(DnsAdd)}

  get_cmd() {return this.cmd}
}
