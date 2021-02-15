import Command from '../../base'

export default class UserRemove extends Command {
  static description = 'user:remove'

  protected cmd = 'user-list_users'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(UserRemove)
  }
}
