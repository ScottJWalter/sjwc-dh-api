import Command from '../../base'

export default class RewardsDisable extends Command {
  static description = 'rewards:disable'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsDisable)
  }
}
