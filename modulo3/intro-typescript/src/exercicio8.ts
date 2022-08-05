function StringReverse (str: string): string{
  return str.split('').reverse().toString().replace(',','')
}