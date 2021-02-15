import Command from '../../base'

export default class ListPost extends Command {
  static description = 'list:post'

  protected cmd = 'list-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(ListPost)
  }
}
