interface Xinfo {
  xinfo: string;
  shard: number;
}

export default async function fetchXinfo(): Promise<string> {
  const result = await fetch(
    "https://www.wildberries.ru/webapi/user/get-xinfo-v2",
    {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );

  const json = (await result.json()) as Xinfo;

  return json.xinfo;
}
