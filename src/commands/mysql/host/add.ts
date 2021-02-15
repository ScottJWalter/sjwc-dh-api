import Command from '../../../base'

export default class MysqlHostAdd extends Command {
  static description = 'mysql:host:add'

  protected cmd = 'mysql-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MysqlHostAdd)
  }
}
