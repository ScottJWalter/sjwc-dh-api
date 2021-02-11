import {Command, flags} from '@oclif/command'

export default class DnsIndex extends Command {
  static description = 'DNS API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('DNS module help goes here.')
  }
}
