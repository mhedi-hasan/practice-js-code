const mobile = {
    brand: "samsung",
    price: "25000 Tk",
    color: "Gray",
    camera: "12px",
    isNew: true,
  }
  // ------------------------------------
  // of: use kora hoy array er moddhe
  // in: use kora hoy object er moddhe
  // -------------------------------------
  for (const prop in mobile) {
      console.log(prop);
      console.log(mobile[prop]);
  }
  const keys = Object.keys(mobile);
  console.log(keys);
  // -----------------------
  // const phone=mobile
  // console.log(phone)
  // for (const key of keys) {
  //     console.log(key);
  // }
  for (const key of keys) {
      console.log(key,':',mobile[key]);
  }
  // ----------------------------
  // const value = Object.values(mobile);
  // console.log(value);
  