import Command from '../../help'

export default class MysqlIndex extends Command {
  static description = 'MySQL API'

  static flags = {...Command.flags}
}
