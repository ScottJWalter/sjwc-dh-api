import Command from '../../base'

export class MetaIndex extends Command {
  static description = 'API metacommands'

  parse_flags() {return null}
  get_cmd() {return ''}

  async run() {
    this.log('Metadata module help goes here.')
  }
}
