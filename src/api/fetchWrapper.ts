export const checkHttpStatus = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    throw error;
  }
};

const parseJson = (response: Response) => {
  try {
    return response.json();
  } catch (error) {
    return {};
  }
};

export const fetchWrapper = async <T>(
  url: string,
  options: RequestInit
): Promise<any> => {
  var data = await fetch(url, options)
    .then(checkHttpStatus)
    .then(parseJson)
    .then(data => {
      return data as T;
    })
    .catch(error => error as T);
  return data;
};
