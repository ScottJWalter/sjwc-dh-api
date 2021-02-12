import {v4 as uuidv4} from 'uuid'

class Config {
  private key: string

  private apiUrl: string

  public host: string

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

  private query_string(args: object): string {
    let str = ''

    for (const [key, value] of Object.entries(args)) {
      str += value.length > 0 ? `&${key}=${encodeURIComponent(value)}` : ''
    }

    return str
  }

  url(cmd: string, format: string, account: string | null) {
    const qry: any = {
      key: this.key,
      cmd: cmd,
      unique_id: this.uuid(),
      format: format,
    }

    if (account) {
      qry.account = account
    }

    return `${this.apiUrl}?${this.query_string(qry)}`
  }
}

const config = new Config()
export default config
