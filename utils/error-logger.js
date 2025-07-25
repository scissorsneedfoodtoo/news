import gracefulFS from 'graceful-fs';

const { writeFileSync } = gracefulFS;
const reportedErrors = [];

export const errorLogger = ({ type, name }) => {
  if (!reportedErrors.includes(name)) {
    reportedErrors.push(name);

    return writeFileSync(`${type}-errors.log`, `${name}\n`, { flag: 'a+' });
  }
};
