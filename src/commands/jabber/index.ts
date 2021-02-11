import {Command, flags} from '@oclif/command'

export default class JabberIndex extends Command {
  static description = 'Jabber API'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log('Jabber module help goes here.')
  }
}
