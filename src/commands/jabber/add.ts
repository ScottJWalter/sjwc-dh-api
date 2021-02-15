import Command from '../../base'

export default class JabberAdd extends Command {
  static description = 'jabber:add'

  protected cmd = 'jabber-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(JabberAdd)
  }
}
