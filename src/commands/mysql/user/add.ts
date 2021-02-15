import Command from '../../../base'

export default class MysqlUserAdd extends Command {
  static description = 'mysql:user:add'

  protected cmd = 'mysql-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MysqlUserAdd)
  }
}
