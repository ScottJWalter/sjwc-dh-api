import {Command, flags} from '@oclif/command'

export default class RewardsIndex extends Command {
  static description = 'Rewards API'

  static flags = {...Command.flags}

  parse_flags(): any {return {}}
  get_cmd(): string {return ''}

  async run() {
    this.log('Rewards module help goes here.')
  }
}
