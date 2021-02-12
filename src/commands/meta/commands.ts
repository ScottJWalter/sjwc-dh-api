import {Command, flags} from '@oclif/command'
// import { table } from 'console';
import config from '../../config'
import * as https from 'https'

export default class MetaCommands extends Command {
  static description = 'meta:commands'

  private cmd = 'api-list_accessible_cmds'

  static flags = {
    account: flags.string({char: 'a', description: 'account to use'}),
    format: flags.string({char: 'f', description: 'format to return'}),
  };

  async run() {
    const {flags} = this.parse(MetaCommands)

    https
    .get(
      config.url(this.cmd, String(flags.format), flags.account ? String(flags.account) : null),
      resp => {
        let data = ''

        resp.on('data', chunk => {
          data += chunk
        })

        resp.on('end', () => {
          // The whole response has been received. Print out the result.
          this.log(data)
        })
      }
    )
    .on('error', err => {
      this.log(`Error: ${err.message}`)
    })
  }
}
