import { gateway as MoltinGateway, MemoryStorageFactory } from "@moltin/sdk";

const Moltin = MoltinGateway({
  // client_id: process.env.CLIENT_ID,
  client_id: "3cklSpcO0QLvSf6WII6afMIL2Ha5waG7i8LYRRvJUv"
  // storage: new MemoryStorageFactory()
});
export default Moltin;

export const getProducts = page =>
  Moltin.Products.Limit(24)
    .Offset(page * 24)
    .With("main_image")
    .All();

// export const getProducts = () => Moltin.Products.All();
// export const getCategory = id => Moltin.Categories.Get(id);
// export const getCategories = () => Moltin.Categories.All();
// export const getFilteredBrands = id => Moltin.Brands.Get(id);
// export const getBrands = () => Moltin.Brands.All();

// export const getProductFromCategory = categoryId =>
//   Moltin.Products.Filter({
//     eq: {
//       category: {
//         id: categoryId
//       }
//     }
//   })
//     .With(["category"])
//     .All();

// export const getProductById = id => {
//   return Moltin.Products.With("main_image")
//     .Get(id)
//     .catch(e => {
//       return e;
//     });
// };

// export const addToCart = (cartId, productId, quantity) =>
//   Moltin.Cart(cartId).AddProduct(productId, quantity);

// export const getCartItems = id => Moltin.Cart(id).Items();

// export const removeFromCart = (productId, cartId) =>
//   Moltin.Cart(cartId).RemoveItem(productId);

// export const checkoutCart = (cartId, customer, billing) =>
//   Moltin.Cart(cartId).Checkout(customer, billing);

// export const categoryTree = () => Moltin.Categories.Tree();

// // export const payForOrder = (orderId, token, email) =>
// //   Moltin.Orders.Payment(orderId, {
// //     gateway: 'stripe',
// //     method: 'purchase',
// //     payment: token,
// //     options: {
// //       receipt_email: email
// //     }
// //   })

// const customer = {
//   email: "alexandre.savard-plante@konnexion.ca",
//   name: "Alexandre Savard-Plante"
// };

// const billing = {
//   first_name: "Alexandre",
//   last_name: "Savard-Plante",
//   line_1: "2nd Floor British India House",
//   line_2: "15 Carliol Square",
//   city: "Newcastle Upon Tyne",
//   postcode: "NE1 6UF",
//   county: "Tyne & Wear",
//   country: "CA"
// };

// export const convertCart = cartId =>
//   Moltin.Cart(cartId)
//     .Checkout(customer, billing)
//     .then(order => {
//       return order;
//     });

// export const payForOrder = async ({
//   order,
//   first_name,
//   last_name,
//   card_number,
//   month,
//   year,
//   verification_value
// }) =>
//   await Moltin.Orders.Payment(order, {
//     gateway: "braintree",
//     method: "purchase",
//     first_name: first_name,
//     last_name: last_name,
//     number: card_number,
//     month: month,
//     year: year,
//     verification_value: verification_value
//   }).then(() => {
//     return true;
//   });

// export const register = async ({ email, password, ...rest }) => {
//   const {
//     data: { name, id }
//   } = await Moltin.Customers.Create({
//     email,
//     password,
//     type: "customer",
//     ...rest
//   });

//   const { token } = await login({ email, password });

//   return {
//     id,
//     name,
//     email,
//     token
//   };
// };

// export const login = async ({ email, password }) => {
//   const {
//     data: { customer_id: id, token }
//   } = await Moltin.Customers.Token(email, password);

//   return {
//     id,
//     token
//   };
// };

// export const getOrders = token => Moltin.Orders.With("items").All(token);

// export const getCustomer = customer => Moltin.Customers.Get(customer);
