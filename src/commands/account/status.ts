import {Command, flags} from '@oclif/command'

export default class AccountStatus extends Command {
  static description = `Returns the status of the current account.
Returns the current account status (billing).
`

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(AccountStatus)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
