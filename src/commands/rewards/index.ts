import {Command, flags} from '@oclif/command'

export default class RewardsIndex extends Command {
  static description = 'Rewards API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('Rewards module help goes here.')
  }
}
