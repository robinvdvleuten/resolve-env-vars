module.exports = function (prefix = 'REACT_APP_') {
  const raw = Object.keys(process.env)
    .filter(key => (new RegExp(`^${prefix}`, 'i')).test(key))
    .reduce(
      (env, key) => Object.assign(env, { [key]: process.env[key] }),
      {}
    );

  const stringified = {
    'process.env': Object.keys(raw).reduce(
      (env, key) => Object.assign(env, { [key]: JSON.stringify(raw[key]) }),
      {}
    )
  };

  return { raw, stringified };
};
