const getOrderData = (data, order, type) => {
  if (!data.length) return [{ ...order }];
  if (type === "delete") return data.filter((el) => el.id !== order.id);
  if (type === "add") return [...data, { ...order }];
};

export default getOrderData;
