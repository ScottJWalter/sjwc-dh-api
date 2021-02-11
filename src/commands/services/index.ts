import {Command, flags} from '@oclif/command'

export default class ServicesIndex extends Command {
  static description = 'Service Control API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('Services module help goes here.')
  }
}
