import {Command, flags} from '@oclif/command'

export default class AccountUser extends Command {
  static description = `Returns disk and bandwidth usage for all visible users.
For all visible users, this returns information on disk
and bandwidth usage.
`

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(AccountUser)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
