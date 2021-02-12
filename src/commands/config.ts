import {Command, flags} from '@oclif/command'

export default class Config extends Command {
  static description = 'configure the CLI'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('Config module help goes here.')
  }
}
