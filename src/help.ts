import Command from '@oclif/command'

export default abstract class extends Command {
  async run(): Promise<void> {
    this.log('help goes here')
  }
}
