import Command from '../../base'

export default class DomainDomains extends Command {
  static description = 'domain:domains'

  protected cmd = 'domain-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(DomainDomains)
  }
}
