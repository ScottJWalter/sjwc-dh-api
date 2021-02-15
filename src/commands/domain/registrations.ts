import Command from '../../base'

export default class DomainRegistrations extends Command {
  static description = 'domain:registrations'

  protected cmd = 'domain-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(DomainRegistrations)
  }
}
