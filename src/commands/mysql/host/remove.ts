import Command from '../../../base'

export default class MysqlHostRemove extends Command {
  static description = 'mysql:host:remove'

  protected cmd = 'mysql-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MysqlHostRemove)
  }
}
