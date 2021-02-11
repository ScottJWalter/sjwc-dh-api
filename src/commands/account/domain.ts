import {Command, flags} from '@oclif/command'

export default class AccountDomain extends Command {
  static description = `Returns bandwidth usage for all visible domain services
Bandwidth usage is counted from the beginning of the
current billing cycle (which, itself, can be determined
by using account:status).
`

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(AccountDomain)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
