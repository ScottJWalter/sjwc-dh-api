import Command from '../../base'
import {flags} from '@oclif/command'

export default class ServicesProgress extends Command {
  static description = 'services:progress'

  private cmd = 'services-progress'

  static flags = {
    ...Command.flags,
    token: flags.string({char: 't', description: 'service token to check'}),
  }

  parse_flags() {return this.parse(ServicesProgress)}
  get_cmd() {return this.cmd}
}
