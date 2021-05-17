
export const required = value => (value ? undefined : 'Required')

export const minValue = min => value => {
   // console.log(min);
   // console.log(value[0]);

   return (
      !!value > min ? undefined : `Should be greater than ${min}`
   )
}
export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)



export const composeValidators = (...validators) => value =>
   validators.reduce((error, validator) => error || validator(value), undefined)