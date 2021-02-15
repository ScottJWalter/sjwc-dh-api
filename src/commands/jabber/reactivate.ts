import Command from '../../base'

export default class JabberReactivate extends Command {
  static description = 'jabber:reactivate'

  protected cmd = 'jabber-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(JabberReactivate)
  }
}
