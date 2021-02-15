import Command from '../../base'

export default class ListRemove extends Command {
  static description = 'list:remove'

  protected cmd = 'list-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(ListRemove)
  }
}
