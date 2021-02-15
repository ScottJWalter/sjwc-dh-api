import Command from '../../base'

export default class RewardsLog extends Command {
  static description = 'rewards:log'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsLog)
  }
}
