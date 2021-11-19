import { EnvError } from '../service';

/** 验证环境变量 */
export function loadEnv(envList: (string | EnvChecker)[]) {
  envList.forEach(env => {
    const { name, checker }: EnvChecker = typeof env === 'string' ? { name: env } : env;
    if (!name) return;
    if (!process.env[name] || (checker && !checker(process.env[name]!))) throw new EnvError(name);
  });
}

interface EnvChecker {
  name: string;
  checker?: (envVal: string) => boolean;
}
