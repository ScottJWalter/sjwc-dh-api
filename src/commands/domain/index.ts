import {Command, flags} from '@oclif/command'

export default class DomainIndex extends Command {
  static description = 'Domain API'

  static flags = {
    help: flags.help({char: 'h', description: 'this help', required: false}),
  }

  async run() {
    this.log('Domain module help goes here.')
  }
}
