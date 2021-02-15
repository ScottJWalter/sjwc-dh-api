import Command from '../../base'

export default class MailAdd extends Command {
  static description = 'mail:add'

  protected cmd = 'mail-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(MailAdd)
  }
}
