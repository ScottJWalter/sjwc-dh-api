import Command from '../../base'

export default class JabberDomains extends Command {
  static description = 'jabber:domains'

  protected cmd = 'jabber-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(JabberDomains)
  }
}
