import useSWR from "swr";

export function useFetch<T = unknown, Error = any>(url: string) {
  const { data, error, isLoading } = useSWR<T, Error>(
    url,
    async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
  );

  return { data, error, isLoading };
}
