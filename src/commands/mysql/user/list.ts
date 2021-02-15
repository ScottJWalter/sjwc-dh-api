import Command from '../../../base'

export default class MysqlUserList extends Command {
  static description = 'mysql:user:list'

  protected cmd = 'mysql-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MysqlUserList)
  }
}
