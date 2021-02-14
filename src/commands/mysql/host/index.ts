import Command from '../../../help'

export default class MysqlHostIndex extends Command {
  static description = 'mysql:host'

  static flags = {...Command.flags}
}
