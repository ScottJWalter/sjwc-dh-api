import Command from '../../base'

export default class RewardsAdd extends Command {
  static description = 'rewards:add'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsAdd)
  }
}
