import Command from '../../base'

export default class JabberUser extends Command {
  static description = 'jabber:user'

  protected cmd = 'jabber-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(JabberUser)
  }
}
