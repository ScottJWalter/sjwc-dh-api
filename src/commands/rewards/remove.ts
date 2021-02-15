import Command from '../../base'

export default class RewardsRemove extends Command {
  static description = 'rewards:remove'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsRemove)
  }
}
