import {Command, flags} from '@oclif/command'

export default class MysqlUserIndex extends Command {
  static description = 'mysql:user:index'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
