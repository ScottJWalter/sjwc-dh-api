import Command from '../../base'

export default class MailList extends Command {
  static description = 'mail:list'

  protected cmd = 'mail-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(MailList)
  }
}
