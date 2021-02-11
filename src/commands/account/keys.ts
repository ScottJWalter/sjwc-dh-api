import {Command, flags} from '@oclif/command'

export default class AccountKeys extends Command {
  static description = `List all SSH public keys on this account.
Returns a list of all public SSH keys associated with
this account.

NOTE:  If individual users have their own key(s), you
      will NOT be able to see them.
`

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(AccountKeys)

    this.log(`hello from ${__filename.replace(process.cwd(), '..')}`)
  }
}
