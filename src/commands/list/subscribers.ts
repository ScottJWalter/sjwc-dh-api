import Command from '../../base'

export default class ListSubscribers extends Command {
  static description = 'list:subscribers'

  protected cmd = 'list-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(ListSubscribers)
  }
}
