import {Command, flags} from '@oclif/command'

export default class DnsList extends Command {
  static description = 'dns:list'

  static flags = {
    help: flags.help({char: 'h', description: 'this help', required: false}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
