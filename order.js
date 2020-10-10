//1 - 4
function takeOrder(order, deliveryOrders) {
  deliveryOrders.push(order);
  if (deliveryOrders.length < 4) {
    deliveryOrders
  } else {
    deliveryOrders.pop(order);
  }
  return deliveryOrders;
}

//5 - 7
function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    deliveryOrders.splice(orderNumber - 1, i);
  }
  console.log(deliveryOrders);
}

//8 - 9
function listItems(deliveryOrders, items) {
  var order = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    order.push(deliveryOrders[i].item);
  }
  return order.join(", ")
}

//10 - 11
function searchOrder(deliveryOrders, order) {
  var result
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === order) {
      return true
    }
  } return false
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
