import Command from '../../help'

export class MetaIndex extends Command {
  static description = 'API metacommands'

  static flags = {...Command.flags}
}
