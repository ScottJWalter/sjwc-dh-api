import Command from '../../base'

export default class JabberDeactivate extends Command {
  static description = 'jabber:deactivate'

  protected cmd = 'jabber-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(JabberDeactivate)
  }
}
