import Command from '../../base'

export class MetaIndex extends Command {
  static description = "API metacommands";

  async run() {
    // const {args, flags} = this.parse(DnsIndex)

    this.log("Metadata module help goes here.");
  }

  parse_flags() {
    return null
  }

  get_cmd() {
    return ''
  }
}
