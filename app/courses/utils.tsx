type Params = { [key: string]: string | string[] | undefined };

export const createUrlWithParams = async (
  baseUrl: string,
  params: Params
): Promise<string> => {
  const resolvedParams = await params;
  const url = new URL(baseUrl);
  const searchParams = new URLSearchParams();

  Object.entries(resolvedParams).forEach(([key, value]) => {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, v));
      } else {
        searchParams.append(key, value);
      }
    }
  });

  url.search = searchParams.toString();
  return url.toString();
};
