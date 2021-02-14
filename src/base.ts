import Command, {flags} from '@oclif/command'
import * as https from 'https'
import config, {stringParams, optionalParams} from './config'

export default abstract class extends Command {
  static flags: optionalParams = {
    account: flags.string({char: 'a', description: 'account to use', required: false}),
    format: flags.string({char: 'f', description: 'format to return', required: true, default: 'json'}),
  }

  abstract parse_flags(): any
  abstract get_cmd(): string

  async run() {
    const {flags} = this.parse_flags()

    https
      .get(
        config.url(this.get_cmd(), flags),
        resp => {
          let data = ''
          resp.on('data', chunk => data += chunk)
          resp.on('end', () => this.log(data))
        }
      )
      .on('error', err => this.log(`Error: ${err.message}`))
  }
}
