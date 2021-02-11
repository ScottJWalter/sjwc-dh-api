import {Command, flags} from '@oclif/command'

export default class DomainIndex extends Command {
  static description = 'Domain API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('Domain module help goes here.')
  }
}
