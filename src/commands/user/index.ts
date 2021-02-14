import Command from '../../help'

export default class UserIndex extends Command {
  static description = 'User API'

  static flags = {...Command.flags}
}
