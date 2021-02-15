import Command from '../../base'

export default class DomainAvailable extends Command {
  static description = 'domain:available'

  protected cmd = 'domain-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(DomainAvailable)
  }
}
