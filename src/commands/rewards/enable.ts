import Command from '../../base'

export default class RewardsEnable extends Command {
  static description = 'rewards:enable'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsEnable)
  }
}
