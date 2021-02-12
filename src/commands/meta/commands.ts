import Command from '../../base'

// import {table} from 'console'

export class MetaCommands extends Command {
  static description = 'meta:commands'

  private cmd = 'api-list_accessible_cmds'

  static flags = {
    ...Command.flags
  }

  parse_flags() { return this.parse(MetaCommands) }
  get_cmd() { return this.cmd }
}
