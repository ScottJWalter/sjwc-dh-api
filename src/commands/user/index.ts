import {Command, flags} from '@oclif/command'

export default class UserIndex extends Command {
  static description = 'User API'

  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description: 'this help', required: false}),
  }

  async run() {
    this.log('User module help goes here.')
  }
}
