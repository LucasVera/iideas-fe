export const logMessage = (msg: string, ...rest: any[]) => {
  const restStr = rest.reduce((acum, curr) => `${acum} ${JSON.stringify(curr)}`, '')
  console.log(new Date().toISOString(), msg, restStr)
}
