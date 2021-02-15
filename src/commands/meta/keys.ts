import Command from '../../base'

export class MetaKeys extends Command {
  static description = 'meta:keys'

  protected cmd = 'api-list_keys'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MetaKeys)
  }
}
