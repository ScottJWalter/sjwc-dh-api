import Command from '../../base'

export class MetaKeys extends Command {
  static description = 'meta:keys'

  private cmd = 'api-list_keys'

  static flags = {
    ...Command.flags,
  }

  parse_flags() {
    return this.parse(MetaKeys)
  }

  get_cmd() {
    return this.cmd
  }
}
