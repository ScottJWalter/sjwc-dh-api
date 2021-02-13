import Command from '../../base'

export default class ServicesIndex extends Command {
  static description = 'Service Control API'

  static flags = {}

  parse_flags(): any {return {}}
  get_cmd(): string {return ''}

  async run() {
    this.log('Services module help goes here.')
  }
}
