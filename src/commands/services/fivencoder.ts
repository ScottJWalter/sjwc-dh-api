import Command from '../../base'
import {flags} from '@oclif/command'

export default class ServicesFivencoder extends Command {
  static description = 'services:fivencoder'

  protected cmd = 'services-flvencoder'

  static flags = {
    ...Command.flags,
    url: flags.string({
      char: 'u',
      description: 'Absolute URI of video or folder to convert.',
    }),
    dim: flags.string({
      char: 'd',
      description: 'Size of video in "400x300" format.',
    }),
    snap: flags.string({
      char: 'p',
      description: 'Number of seconds into video to take preview snapshot.',
    }),
    ab: flags.string({char: 'a', description: 'Audio bitrate'}),
    ar: flags.string({char: 'r', description: 'Audio sample rate'}),
    batch: flags.string({
      char: 'b',
      description:
        'Set if you pass a path to a directory to convert all files.',
    }),
    quiet: flags.string({
      char: 'q',
      description: 'Only send one email for a batch conversion.',
    }),
    noemail: flags.string({char: 'n', description: 'Send no emails at all.'}),
  }

  parse_flags(): any {
    return this.parse(ServicesFivencoder)
  }
}
