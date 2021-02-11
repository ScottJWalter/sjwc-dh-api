import {Command, flags} from '@oclif/command'

export default class MetaCommands extends Command {
  static description = 'meta:commands'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
