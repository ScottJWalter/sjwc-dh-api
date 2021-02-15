import Command from '../../base'

export default class RewardsList extends Command {
  static description = 'rewards:list'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsList)
  }
}
