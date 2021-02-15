import Command from '../../base'

export default class ListLists extends Command {
  static description = 'list:lists'

  protected cmd = 'list-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(ListLists)
  }
}
