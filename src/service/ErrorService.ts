/** 环境变量Error */
export class EnvError extends Error {
  constructor(env: string) {
    super(`[EnvError] 环境变量 '${env}' 未提供或验证错误`);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
