export const fetchParams = async () => {
  const resp = await fetch(
    "https://4001.hoteladvisor.net/SP_RESTAURANT_BOOKINGPARAMS",
    {
      referrer: "https://paket.shxpr.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"Parameters":{"SUBDOMAIN":null,"HOTELID":null,"CNAMEWEB":"shxpr.com","CNAMEWEBSUB":"paket.shxpr.com","LANGUAGE":"","PORTALID":1},"Action":"Execute","Object":"SP_RESTAURANT_BOOKINGPARAMS"}',
      method: "POST",
      mode: "cors",
      credentials: "omit",
    }
  );
  return resp.json();
};
