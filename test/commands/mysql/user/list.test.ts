import {test} from '@oclif/test'

describe('mysql:user:list', () => {
  test
    .stdout()
    .command(['mysql:user:list'])
    .it('needs to be written')
})
