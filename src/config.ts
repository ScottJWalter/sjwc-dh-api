import {flags} from '@oclif/command'
import {v4 as uuidv4} from 'uuid'

interface requiredParams {
  key: flags.IOptionFlag<string>,
  cmd: flags.IOptionFlag<string>,
  unique_id: flags.IOptionFlag<string>,
}

interface optionalParams {
  [name: string]: flags.IOptionFlag<string | undefined>,
}

interface stringParams {
  [name: string]: string | undefined,
}

type queryParams = requiredParams & optionalParams

interface commonParams {
  account?: flags.IOptionFlag<string | undefined>,
  format?: flags.IOptionFlag<string | undefined>,
}

export {commonParams, requiredParams, optionalParams, queryParams, stringParams}
class Config {
  private apiUrl: string
  public host: string
  private key: string

  constructor() {
    if (!process.env.DREAMHOST_API_KEY) {
      throw new Error('DREAMHOST_API_KEY not defined')
    }

    this.host = 'api.dreamhost.com'
    this.apiUrl = 'https://api.dreamhost.com/'
    this.key = String(process.env.DREAMHOST_API_KEY)
  }

  private uuid() {
    return uuidv4()
  }

  private query_string(args: stringParams): string {
    let str = ''

    for (const [key, value] of Object.entries({...args})) {
      str += String(value).length > 0 ? `&${key}=${encodeURIComponent(String(value))}` : ''
    }

    return str
  }

  url(cmd: string, args: stringParams): string {
    const req: stringParams = {
      key: this.key,
      cmd: cmd,
      unique_id: this.uuid(),
    }

    return `${this.apiUrl}?${this.query_string({...req, ...args})}`
  }
}

const config = new Config()
export default config
