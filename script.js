let f = async function () {
  const res = await axios.get(
    "https://api-futures.kucoin.com/api/v1/position?symbol=XBTUSDM.",
    {
      headers: {
        "KC-API-KEY": "63a9e1f65cca1100015fdcb8",
        "KC-API-PASSPHRASE": "918d5bfd-bd98-446b-b86a-fd82dff2ef21",
        "KC-API-SIGN":
      },
    }
  );

  log(res.data);
};
console.log(Date.now());
f();
