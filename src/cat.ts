
type Options = {
  pre: string
}

export const cat = (options: Options, message: string): string => {
  return `${options.pre ? options.pre : ''}${options.pre ? ' ' : ''}${message}`
}
