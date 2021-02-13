import Command from '../../base'

export default class UserList extends Command {
  static description = 'user:list'

  private cmd = 'user-list_users'

  static flags = {
    ...Command.flags
  }

  parse_flags() {
    return this.parse(UserList)
  }

  get_cmd() {
    return this.cmd
  }
}
