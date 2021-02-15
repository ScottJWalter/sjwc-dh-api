import Command from '../../base'

export class MetaCommands extends Command {
  static description = 'meta:commands'

  protected cmd = 'api-list_accessible_cmds'

  static flags = {
    ...Command.flags,
  }

  parse_flags(): any {
    return this.parse(MetaCommands)
  }
}
