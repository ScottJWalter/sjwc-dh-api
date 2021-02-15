import Command from '../../base'

export default class RewardsDetails extends Command {
  static description = 'rewards:details'

  protected cmd = 'rewards-'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(RewardsDetails)
  }
}
