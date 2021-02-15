import Command from '../../../base'

export default class MysqlHostList extends Command {
  static description = 'mysql:host:list'

  protected cmd = 'mysql-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MysqlHostList)
  }
}
