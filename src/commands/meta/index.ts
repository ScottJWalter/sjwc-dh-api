import {Command, flags} from '@oclif/command'

export default class MetaIndex extends Command {
  static description = 'API metacommands'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
