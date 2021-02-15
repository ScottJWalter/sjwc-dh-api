import Command from '../../base'

export default class DnsRemove extends Command {
  static description = 'dns:remove'

  protected cmd = 'dns-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(DnsRemove)
  }
}
