import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = `this line always shows up here
This line shows up here.
testing, one, two three ...
`

  static examples = [
    `$ dh-api hello
hello world from ${__filename.replace(process.cwd(), '..')}
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [
    {
      name: 'string',
      description: 'optional string to echo back',
      default: 'world',
    },
  ]

  async run() {
    const {args, flags} = this.parse(Hello)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ${__filename.replace(process.cwd(), '..')}`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
