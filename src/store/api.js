import md5 from 'md5';
const password = 'Valantis';

export async function getIds(offset, limit) {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const authString = md5(`${password}_${timestamp}`);

  const response = await fetch('https://api.valantis.store:41000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': authString,
    },
    body: JSON.stringify({
      action: 'get_ids',
      params: {
        offset: offset,
        limit: limit,
      },
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.result;
  } else {
    throw new Error('Failed to get ids');
  }
}

export async function getPrise(ids) {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const authString = md5(`${password}_${timestamp}`);

  const response = await fetch('https://api.valantis.store:41000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': authString,
    },
    body: JSON.stringify({
      action: 'get_items',
      params: {
        ids: [...ids],
      },
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.result;
  } else {
    throw new Error('Failed to get prices');
  }
}

export async function getFields() {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const authString = md5(`${password}_${timestamp}`);

  const response = await fetch('https://api.valantis.store:41000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': authString,
    },
    body: JSON.stringify({
      action: 'get_fields',
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.result;
  } else {
    throw new Error('Failed to get fields');
  }
}

export async function filterProductsByField(field, value) {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const authString = md5(`${password}_${timestamp}`);

  const response = await fetch('https://api.valantis.store:41000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': authString,
    },
    body: JSON.stringify({
      action: 'filter',
      params: {
        [field]: value,
      },
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.result;
  } else {
    throw new Error('Failed to filter products');
  }
}
