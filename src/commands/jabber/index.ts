import {Command, flags} from '@oclif/command'

export default class JabberIndex extends Command {
  static description = 'Jabber API'

  static flags = {
    help: flags.help({char: 'h', description: 'this help', required: false}),
  }

  async run() {
    this.log('Jabber module help goes here.')
  }
}
