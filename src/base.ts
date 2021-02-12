import Command, {flags} from '@oclif/command'
import * as https from 'https'
import config from './config'

export default abstract class extends Command {
  static flags = {
    account: flags.string({ char: 'a', description: 'account to use' }),
    format: flags.string({ char: 'f', description: 'format to return' }),
  }

  abstract parse_flags(): any
  abstract get_cmd(): string

  async run() {
    const { flags } = this.parse_flags()

    https
      .get(
        config.url(
          this.get_cmd(),
          String(flags.format),
          flags.account ? String(flags.account) : null
        ),
        (resp) => {
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
