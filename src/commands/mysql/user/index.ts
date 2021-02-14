import Command from '../../../help'

export default class MysqlUserIndex extends Command {
  static description = 'mysql:user:index'

  static flags = {...Command.flags}
}
