import Command from '../../base'

export default class UserList extends Command {
  static description = 'user:list'

  protected cmd = 'user-list_users'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(UserList)
  }
}
