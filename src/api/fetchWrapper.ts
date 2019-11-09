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
): Promise<T> => {
  var data = await fetch(url, options)
    .then(checkHttpStatus)
    .then(parseJson)
    .then(data => {
      return data;
    })
    .catch((error: any) => error);
  return data;
};
