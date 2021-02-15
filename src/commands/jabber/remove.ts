import Command from '../../base'

export default class JabberRemove extends Command {
  static description = 'jabber:remove'

  protected cmd = 'jabber-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(JabberRemove)
  }
}
