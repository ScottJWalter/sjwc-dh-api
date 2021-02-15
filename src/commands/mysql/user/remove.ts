import Command from '../../../base'

export default class MysqlUserRemove extends Command {
  static description = 'mysql:user:remove'

  protected cmd = 'mysql-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MysqlUserRemove)
  }
}
