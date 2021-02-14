import {Command, flags} from '@oclif/command'

export default class DnsIndex extends Command {
  static description = 'DNS API'

  static flags = {
    help: flags.help({char: 'h', description: 'this help', required: false}),
  }

  async run() {
    this.log('DNS module help goes here.')
  }
}
