import Command from '../../base'

export default class DnsList extends Command {
  protected cmd = 'dns-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(DnsList)
  }
}
