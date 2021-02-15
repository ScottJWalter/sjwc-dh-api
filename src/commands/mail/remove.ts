import Command from '../../base'

export default class MailRemove extends Command {
  static description = 'mail:remove'

  protected cmd = 'mail-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(MailRemove)
  }
}
