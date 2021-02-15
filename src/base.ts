/* eslint @typescript-eslint/no-unused-vars: "off", no-unused-vars: "off" */
import Command, {flags} from '@oclif/command'
import * as https from 'https'
import config, {optionalParams} from './config'

export default abstract class extends Command {
  static flags: optionalParams = {
    account: flags.string({
      char: 'a',
      description: 'account to use',
      required: false,
    }),
    format: flags.string({
      char: 'f',
      description: 'format to return',
      required: true,
      default: 'json',
    }),
  }

  protected cmd = ''

  public parse_flags(): any {
    return {}
  }

  public get_cmd(): string {
    return this.cmd
  }

  async run(): Promise<void> {
    const {flags} = this.parse_flags()

    https
      .get(config.url(this.get_cmd(), flags), resp => {
        let data = ''
        resp.on('data', chunk => {
          data += chunk
        })
        resp.on('end', () => this.log(data))
      })
      .on('error', err => this.log(`Error: ${err.message}`))
  }
}
