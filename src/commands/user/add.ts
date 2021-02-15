import Command from '../../base'

export default class UserAdd extends Command {
  static description = 'user:add'

  protected cmd = 'user-add'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(UserAdd)
  }
}
