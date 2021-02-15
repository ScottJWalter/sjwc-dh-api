import Command from '../../base'

export default class RewardsSummary extends Command {
  static description = 'rewards:summary'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsSummary)
  }
}
