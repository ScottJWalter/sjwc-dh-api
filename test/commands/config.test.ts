import {test} from '@oclif/test'

describe('config', () => {
  test
    .stdout()
    .command(['config'])
    .it('needs to be written')
})
