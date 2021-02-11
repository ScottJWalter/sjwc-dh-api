import {Command, flags} from '@oclif/command'

export default class MysqlHostIndex extends Command {
  static description = 'mysql:host'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
