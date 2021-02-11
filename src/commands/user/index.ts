import {Command, flags} from '@oclif/command'

export default class UserIndex extends Command {
  static description = 'User API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('User module help goes here.')
  }
}
