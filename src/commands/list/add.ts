import Command from '../../base'

export default class ListAdd extends Command {
  static description = 'list:add'

  protected cmd = 'list-'

  static flags = {...Command.flags}

  parse_flags(): any {
    return this.parse(this.ctor)
  }
}
