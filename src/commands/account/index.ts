import {Command, flags} from '@oclif/command'

export default class AccountIndex extends Command {
  static description = `Account API Overview
The Account module provides commands to check usage and
status of your account.
`

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(AccountIndex)

    this.log('Account module help goes here.')
  }
}
