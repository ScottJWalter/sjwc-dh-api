import {Command, flags} from '@oclif/command'

export default class ListIndex extends Command {
  static description = 'Announcement List API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('List module help goes here.')
  }
}
