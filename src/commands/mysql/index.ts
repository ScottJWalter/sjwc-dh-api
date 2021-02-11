import {Command, flags} from '@oclif/command'

export default class MysqlIndex extends Command {
  static description = 'MySQL API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
