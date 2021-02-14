import {Command, flags} from '@oclif/command'

export default class AccountIndex extends Command {
  static description = `Account API Overview
The Account module provides commands to check usage and
status of your account.
`

  static flags = {
    help: flags.help({char: 'h', description: 'this help', required: false}),
  }

  async run() {
    this.log('Account module help goes here.')
  }
}
