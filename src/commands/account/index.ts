import Command from '../../help'

export default class AccountIndex extends Command {
  static description = `Account API Overview
The Account module provides commands to check usage and
status of your account.
`

  static flags = {...Command.flags}
}
